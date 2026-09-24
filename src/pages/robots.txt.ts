import type { APIRoute } from 'astro';
import { basePath } from '@/i18n';

/**
 * robots.txt dinamis — URL Sitemap diambil dari config `site` + `base`
 * sehingga selalu benar walau dideploy di root, subdomain, maupun
 * subfolder (base path). Ganti file statik di public/ yang hardcode
 * domain produksi.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL(`${basePath}/sitemap-index.xml`, site);
  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`,
    {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    }
  );
};
