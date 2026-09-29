/**
 * form.ts — SATU-SATUNYA jalur pengiriman formulir kontak (SOT).
 *
 * SEKARANG: FormSubmit (gratis, tanpa signup) via endpoint AJAX — alamat
 * endpoint tinggal di src/lib/api.ts (API_ENDPOINTS.contact), bukan di sini.
 * NANTI: ganti implementasi submitContact() ke Astro Actions / API milik
 * sendiri (astro:actions, adapter, dst.). Signature fungsi dan tipe
 * ContactMessage TIDAK berubah → komponen form tidak tersentuh.
 */
import { API_ENDPOINTS, apiFetch } from '@/lib/api';

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  message: string;
  consent: boolean;
}

export interface SubmitResult {
  ok: boolean;
}

/** Nama field honeypot anti-bot (khusus FormSubmit). Jangan diubah. */
export const HONEYPOT_NAME = '_honey';

/**
 * Kirim pesan kontak.
 *
 * @param data      isian pengguna (sudah divalidasi & di-trim pemanggil).
 * @param honeypot  nilai field siluman; bot mengisinya → permintaan
 *                  diabaikan tanpa dikirim, namun tetap terlihat sukses
 *                  (bot tidak belajar bahwa ia terdeteksi).
 */
export async function submitContact(
  data: ContactMessage,
  honeypot?: string
): Promise<SubmitResult> {
  if (honeypot) {
    return { ok: true };
  }

  try {
    // Endpoint & perilaku fetch ditangani api.ts (SOT); di sini hanya payload.
    // Semantik SUKSES bersifat provider-agnostik: status 2xx = diterima (ok),
    // kecuali payload SECARA EKSPLISIT bilang gagal ({ success: false|"false" }).
    // Jadi backend bahasa apa pun cukup membalas 200 + JSON kosong/"ok" — dan
    // FormSubmit (yang membalas { success: "true" }) tetap berfungsi.
    const json = await apiFetch<{ success?: string | boolean }>(API_ENDPOINTS.contact, {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone ?? '',
        message: data.message,
        _subject: `[Kontak Web] ${data.name}`,
      }),
    });
    return { ok: json?.success !== false && json?.success !== 'false' };
  } catch {
    // Kegagalan jaringan/timeout/server → lapor gagal (bukan throw),
    // tetap perilaku lama: caller hanya peduli `ok`.
    return { ok: false };
  }
}
