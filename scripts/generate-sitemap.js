import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SUPPORTED_LANGUAGES, SITE_URL } from '../src/constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Remove duplicate constants
// const SITE_URL = 'https://k10.kr';
// const LANGUAGES = ['en', 'zh', 'ko', 'ja', 'mn', 'vi', 'ru'];
const ROUTES = ['', 'consultation'];

const generateSitemap = () => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  ROUTES.forEach(route => {
    SUPPORTED_LANGUAGES.forEach(lang => {
      // route is empty string for home, 'consultation' for others
      // path construction: lang + (route ? '/' + route : '')
      const urlPath = route ? `${lang}/${route}` : lang;
      const url = `${SITE_URL}/${urlPath}`;

      xml += `
  <url>
    <loc>${url}</loc>`;

      // Add hreflang links
      SUPPORTED_LANGUAGES.forEach(altLang => {
        const altUrlPath = route ? `${altLang}/${route}` : altLang;
        const altUrl = `${SITE_URL}/${altUrlPath}`;
        xml += `
    <xhtml:link rel="alternate" hreflang="${altLang}" href="${altUrl}"/>`;
      });

      // x-default (pointing to English version)
      const defaultUrlPath = route ? `en/${route}` : 'en';
      xml += `
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/${defaultUrlPath}"/>`;

      xml += `
  </url>`;
    });
  });

  xml += `
</urlset>`;

  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml);
  console.log(`Sitemap generated at ${outputPath}`);
};

generateSitemap();
