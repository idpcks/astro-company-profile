import { defineCollection } from 'astro:content';
// Catatan: `z` dari 'astro:content' sudah deprecated di Astro 7 (akan
// dihapus di Astro 8) — sumber resmi tetap 'astro/zod'.
import { z } from 'astro/zod';
import { blogLoader } from '@/loaders/blog';

/**
 * Koleksi blog — Content Layer API (Astro 5+), BILINGUAL.
 *
 * SUMBER artikel & logika id di src/loaders/blog.ts (blogLoader()).
 * Di sini content.config.ts hanya memasang loader + schema — jadi kalau
 * sumber pindah dari file lokal ke backend, cukup ganti isi blogLoader()
 * di src/loaders/blog.ts; koleksi, halaman, dan src/lib/blog.ts tak tersentuh.
 *
 * Konvensi id: `{slug}::{locale}` ("artikel::id", "artikel::en") diurai
 * jadi { slug, locale } oleh parseEntryId di src/lib/blog.ts. Format ini
 * WAJIB dipertahankan oleh loader mana pun.
 */
const blog = defineCollection({
  loader: blogLoader(),
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
