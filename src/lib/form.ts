/**
 * form.ts — SATU-SATUNYA jalur pengiriman formulir kontak (SOT).
 *
 * SEKARANG: FormSubmit (gratis, tanpa signup) via endpoint AJAX.
 * NANTI: ganti implementasi submitContact() ke Astro Actions / API
 * milik sendiri (astro:actions, adapter, dst.). Signature fungsi dan
 * tipe ContactMessage TIDAK berubah → komponen form tidak tersentuh.
 */
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

/**
 * Inbox tujuan. Perlu aktivasi: pada kiriman pertama FormSubmit mengirim
 * email konfirmasi ke alamat ini — klik tautannya sekali agar aktif.
 * Ganti ke alamat penerima lain = edit satu baris ini.
 */
const INBOX_EMAIL = 'mail.idpcks@gmail.com';

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${INBOX_EMAIL}`;

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

  const res = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone ?? '',
      message: data.message,
      _subject: `[Kontak Web] ${data.name}`,
    }),
  });

  const json = (await res.json().catch(() => null)) as { success?: string } | null;
  return { ok: res.ok && json?.success === 'true' };
}
