# Riformaskin Website

Statische Astro-Website für Riformaskin, vorbereitet für GitHub → Cloudflare Pages.

## Stack
- Astro
- Tailwind CSS
- TypeScript
- Vanilla JavaScript für Mobile Navigation und Treatment-Accordion

## Start
```bash
npm install
npm run dev
npm run build
npm run preview
```

Der Build erzeugt standardmäßig `dist/` und ist als statische Site deploybar.

## Struktur
- `src/components/` – wiederverwendbare UI-Bausteine
- `src/data/site.ts` – zentrale Kontaktdaten
- `src/data/treatments.ts` – datengetriebener Treatment-Katalog
- `src/data/content.ts` – redaktionelle Platzhalter
- `src/layouts/BaseLayout.astro` – globales Layout, SEO und Shell
- `public/images/` – lokale Bild-/Logo-Struktur

## Annahmen / Platzhalter
- Telefonnummer, WhatsApp, Adresse und Instagram sind Platzhalter.
- Hero-, Treatment-, Portrait- und OG-Bilder sind lokale SVG-Platzhalter und müssen vor Launch durch eigene, optimierte WebP/AVIF-Bilder ersetzt werden.
- Impressum und Datenschutz enthalten bewusst keine erfundenen juristischen Angaben.
- Preise sind nicht erfunden.
- Texte zu Konzept, Werten und Treatments sind redaktionelle Platzhalter.
- Der Header verwendet aktuell einen Text-Wordmark; das finale Logo kann zentral auf eine Datei unter `public/images/logo/` umgestellt werden.
- Es werden bewusst keine externen Font-Requests ausgelöst. Die Typografie nutzt hochwertige System-/Serif-Fallbacks. Bei Bedarf können später selbst gehostete Webfonts ergänzt werden.

## Designentscheidung
Die visuelle Richtung orientiert sich an ruhiger Editorial-Skincare-Ästhetik: großzügige Flächen, Serif/Sans-Kombination, warme Neutraltöne und reduzierte UI. Es werden keine Layouts, Texte, Bilder oder Markenassets von rhodeskin.com übernommen.

## SEO
Astro erzeugt die Sitemap-Datei aus den Seiten; `site` ist in `astro.config.mjs` gesetzt. Canonicals, Meta, Open Graph, Twitter Card und Robots-Meta sind im BaseLayout zentralisiert. Die produktive Domain muss vor Launch geprüft werden.

## Accessibility
- semantische HTML-Struktur
- sichtbare Focus States
- Mobile-Menü mit `aria-expanded`, `aria-controls`, Escape-Unterstützung und Fokus auf den ersten Link
- Accordion mit `aria-expanded`/`aria-controls`
- `prefers-reduced-motion`
- Touch-Ziele mit ausreichender Fläche

## Spätere Mehrsprachigkeit
Deutsch bleibt zunächst unter `/`. Für Englisch kann später eine Content-Schicht mit Sprachobjekten ergänzt und z. B. `/en/` als zweite Route erzeugt werden. Navigation, Treatments und SEO-Metadaten sollten dann aus sprachabhängigen Daten stammen; ein vollständiges i18n-System ist für den aktuellen Umfang nicht erforderlich.
