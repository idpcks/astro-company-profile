/**
 * Helper konten blog bilingual — satu-satunya tempat yang memahami
 * format entry.id koleksi blog.
 *
 * FORMAT ID: content.config.ts (generateId) membentuk
 *   entry.id = "{slug}::{locale}"
 * dari konvensi file per-locale:
 *   artikel.md     → locale 'id'
 *   artikel.en.md  → locale 'en'
 *
 * POLA FALLBACK (dipakai listing /en/blog):
 *   Kalau artikel belum punya terjemahan `en`, listing EN tetap
 *   menampilkannya dengan KONTEN versi id + flag `isFallback: true`
 *   (⚠️ jangan pernah fallback di halaman DETAIL — itu duplikat konten
 *   untuk SEO; cukup notice "belum tersedia dalam EN").
 *
 * Semua query halaman blog melewati modul ini — halaman tidak boleh
 * memanggil getCollection('blog') langsung lagi.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { languages, defaultLang, type Lang } from '@/i18n';

/** Locale yang tersedia untuk satu slug (diurutkan: id, en). */
export type AvailableLocales = Lang[];

/** Post ternormalisasi: metadata + slug + locale + URL siap pakai. */
export interface NormalizedPost {
	/** Slug URL (sama antar locale). */
	slug: string;
	/** Locale file sumber. */
	locale: Lang;
	/** Lokale yang tersedia untuk slug ini. */
	availableLocales: AvailableLocales;
	/** Path URL sesuai locale (tanpa prefix utk id, /en/... utk en). */
	url: string;
	/** True bila konten yang dirender BUKAN bahasa halaman (fallback). */
	isFallback: boolean;
	/** Entry asli — untuk render() di halaman detail. */
	entry: CollectionEntry<'blog'>;
	// Metadata ringkas — di-forward dari entry.data agar komponen
	// tidak perlu tahu bentuk entry mentah.
	title: string;
	description: string;
	pubDate: Date;
	updatedDate?: Date;
	author: string;
	image?: string;
	tags: string[];
}

/** Urutan locale stabil (id dulu) untuk output deterministik. */
const LANG_ORDER: Lang[] = Object.keys(languages) as Lang[];

/** Uraikan entry.id "{slug}::{locale}" → komponennya. */
export function parseEntryId(id: string): { slug: string; locale: Lang } {
	const [slug, locale] = id.split('::');
	return { slug, locale: locale as Lang };
}

/** Ambil semua post koleksi blog, sudah terurai & terpasang locale. */
export async function getAllPosts(): Promise<NormalizedPost[]> {
	const entries = await getCollection('blog');
	const pairs = entries.map((entry) => parseEntryId(entry.id));

	// Peta slug → daftar locale yang tersedia.
	const bySlug = new Map<string, Set<Lang>>();
	for (const { slug, locale } of pairs) {
		if (!bySlug.has(slug)) bySlug.set(slug, new Set());
		bySlug.get(slug)!.add(locale);
	}

	return entries.map((entry) => {
		const { slug, locale } = parseEntryId(entry.id);
		const available = bySlug.get(slug) ?? new Set<Lang>();
		const availableLocales = LANG_ORDER.filter((l) => available.has(l));
		return {
			slug,
			locale,
			availableLocales,
			url: '',
			isFallback: false,
			entry,
			title: entry.data.title,
			description: entry.data.description,
			pubDate: entry.data.pubDate,
			updatedDate: entry.data.updatedDate,
			author: entry.data.author,
			image: entry.data.image,
			tags: entry.data.tags,
		};
	});
}

/**
 * Pasangan terjemahan: ambil SEMUA locale untuk satu slug, lalu pilih
 * versi bahasa halaman; kalau tidak ada → versi default (id).
 *
 * @param slug    slug URL (sama antar locale)
 * @param lang    locale halaman yang sedang dirender
 * @returns post versi `lang`, atau versi id (dengan isFallback=true
 *          bila versi id juga bukan bahasa halaman — terjadi di /en).
 */
export async function getPostBySlug(
	slug: string,
	lang: Lang,
): Promise<NormalizedPost | undefined> {
	const posts = (await getAllPosts()).filter((p) => p.slug === slug);
	if (posts.length === 0) return undefined;

	// Pilih versi bahasa halaman; fallback ke defaultLang.
	const exact = posts.find((p) => p.locale === lang);
	const chosen = exact ?? posts.find((p) => p.locale === defaultLang) ?? posts[0];
	chosen.isFallback = chosen.locale !== lang;

	// URL detail TIDAK dibuat untuk fallback di locale prefix — kalau
	// tidak ada versi en, /en/blog/<slug> tidak boleh ter-generate.
	if (!chosen.isFallback) {
		chosen.url = lang === defaultLang ? `/blog/${slug}` : `/${lang}/blog/${slug}`;
	}
	return chosen;
}

/** Semua slug unik — untuk getStaticPaths halaman detail per locale. */
export async function getAllSlugs(): Promise<string[]> {
	const posts = await getAllPosts();
	return [...new Set(posts.map((p) => p.slug))];
}

/**
 * Post untuk LISTING satu locale.
 * - Versi bahasa halaman bila ada,
 * - fallback ke versi id (isFallback=true) supaya listing EN tetap
 *   lengkap sebelum terjemahan selesai — dengan konten id.
 * Listing diurutkan terbaru dulu.
 */
export async function getPostsForListing(lang: Lang): Promise<NormalizedPost[]> {
	const all = await getAllPosts();

	// Kelompokkan per slug.
	const bySlug = new Map<string, NormalizedPost[]>();
	for (const post of all) {
		if (!bySlug.has(post.slug)) bySlug.set(post.slug, []);
		bySlug.get(post.slug)!.push(post);
	}

	const listing: NormalizedPost[] = [];
	for (const [slug, versions] of bySlug) {
		const exact = versions.find((p) => p.locale === lang);
		const chosen = exact ?? versions.find((p) => p.locale === defaultLang) ?? versions[0];
		chosen.isFallback = chosen.locale !== lang;
		chosen.url =
			lang === defaultLang
				? `/blog/${slug}`
				: chosen.isFallback
					? `/blog/${slug}` // fallback → tunjuk halaman versi id
					: `/${lang}/blog/${slug}`;
		listing.push(chosen);
	}

	return listing.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());
}

/**
 * Lokale non-default yang benar-benar punya terjemahan untuk slug ini.
 * Dipakai LangSwitcher (fallback ke listing) & hreflang per-artikel.
 */
export function getOtherAvailableLocales(
	post: Pick<NormalizedPost, 'availableLocales'>,
	lang: Lang,
): AvailableLocales {
	return post.availableLocales.filter((l) => l !== lang);
}
