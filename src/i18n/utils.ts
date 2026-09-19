/**
 * Shim kompatibilitas — pola resmi docs Astro (`useTranslations`).
 *
 * Implementasi inti ada di `index.ts` (tFactory, getLangFromUrl,
 * localePath, alternatePath, localized). File ini hanya menyediakan
 * API bergaya recipe supaya contoh dari docs Astro tetap jalan:
 *
 *   import { useTranslations } from '@/i18n/utils';
 *   const t = useTranslations('en');
 *   t('nav.home'); // 'Home'
 */
import { defaultLang, getLangFromUrl, tFactory } from './index';
import { ui, type Lang, type UiKeys } from './index';

export { defaultLang, getLangFromUrl, ui };

/**
 * Versi `t()` bergaya recipe: closure per-locale.
 * Identik dengan `tFactory(lang)` — hanya bentuk API-nya yang beda.
 */
export function useTranslations(lang: Lang) {
  return function t(key: UiKeys): string {
    return tFactory(lang)(key);
  };
}
