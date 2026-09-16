import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// Catatan: `z` dari 'astro:content' sudah deprecated di Astro 7 (akan
// dihapus di Astro 8) — sumber resmi tetap 'astro/zod'.
import { z } from 'astro/zod';

/**
 * Koleksi blog — Content Layer API (Astro 5+), BILINGUAL.
 *
 * KONVENSI FILE (per-locale, bukan per-folder locale):
 *   artikel.md        → locale 'id' (default)
 *   artikel.en.md     → locale 'en', slug harus sama dengan versi id
 *
 * Kenapa per-locale-file, bukan folder content/blog/id|en?
 *   - Pasangan terjemahan berdampingan — jelas mana yang belum
 *     diterjemahkan (file tanpa kembaran .en.md).
 *   - Slug URL disamakan antar locale (SEO: slug id tidak di-anglicize);
 *     pembedanya hanya prefix /en.
 *
 * generateId mengekstrak locale dari akhiran ".en.md" (default 'id')
 * dan menyimpannya di entry.id dengan pemisah "::", lalu diuraikan
 * jadi { slug, locale } oleh src/lib/blog.ts. customRequestLocale juga
 * disediakan agar <Content /> di halaman en pakai lokal Markdown yang tepat.
 */
const blog = defineCollection({
	loader: glob({
		pattern: ['*.md', '*.en.md'],
		base: './src/content/blog',
		generateId: ({ entry }) => {
			// Konteks loader versi ini: { entry, base, data } — entry adalah
			// path relatif dari base (mis. "artikel.en.md").
			const fileName = String(entry).split('/').pop() ?? '';
			const isEn = /\.en\.md$/.test(fileName);
			const locale = isEn ? 'en' : 'id';
			const baseSlug = fileName.replace(/\.en\.md$|\.md$/, '');
			return `${baseSlug}::${locale}`;
		},
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		author: z.string().default('Admin'),
		image: z.string().optional(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { blog };
