# Arthur Morgan | Outlaw Legacy

## Úvod

**Arthur Morgan | Outlaw Legacy** je interaktivní fanouškovská webová prezentace inspirovaná postavou Arthura Morgana z hry *Red Dead Redemption 2*.

Cílem projektu bylo vytvořit atmosférický, responzivní web pouze pomocí **HTML5, CSS3 a Vanilla JavaScriptu**, bez použití frameworků, s důrazem na vizuální styl, interaktivitu a optimalizaci.

Projekt simuluje filmový zážitek pomocí animací, canvas efektů a dynamických UI prvků.

---

## Živá ukázka

* GitHub Pages:
  https://michalkovac978.github.io/Arthur-morgan-web/

---

## Použité technologie

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Canvas API
- Intersection Observer API
  
---
### Vývojové prostředí

- Visual Studio Code 1.xx
- Live Server Extension
- GitHub Pages

---
## Struktura projektu

```text
Arthur-morgan-web/
│
├── index.html
├── style.css
├── scripts.js
├── sitemap.xml
└── README.md
```

---

# Technický rozbor optimalizace

## 1. Výkon (Performance)

### Řešení

Web využívá optimalizační techniky pro snížení zátěže:

* `loading="lazy"` u obrázků
* `decoding="async"`
* Intersection Observer pro animace
* animace běží pouze při viditelnosti prvku
* canvas efekty respektují `prefers-reduced-motion`

### Ukázka

```html
<img src="image.jpg" loading="lazy" decoding="async" alt="Arthur Morgan">
```

### Vysvětlení

Obrázky a animace se načítají efektivněji a nezatěžují výkon při prvním renderu stránky.

---

## 2. SEO

### Řešení

* meta description
* meta keywords
* Open Graph (Facebook / LinkedIn)
* Twitter Cards
* canonical URL
* strukturovaná data (JSON-LD)
* sitemap.xml

### Ukázka

```html
<meta name="description" content="Atmosférická interaktivní prezentace Arthura Morgana z Red Dead Redemption 2.">

<meta property="og:title" content="Arthur Morgan | Outlaw Legacy">
```

### Sitemap

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>https://michalkovac978.github.io/Arthur-morgan-web/</loc>
    <lastmod>2026-06-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

</urlset>
```

---

## 3. Přístupnost (Accessibility)

### Řešení

* skip link pro rychlou navigaci
* aria-label u navigace
* ovládání přes klávesnici
* focus states
* podpora `prefers-reduced-motion`

### Ukázka

```html
<a href="#main-content" class="skip-link">Přeskočit na obsah</a>
```

### Vysvětlení

Web je použitelný i bez myši a pro uživatele se čtečkami obrazovky.

---

## 4. Sociální sítě (Open Graph)

### Řešení

* Open Graph metadata
* Twitter Cards

### Ukázka

```html
<meta property="og:title" content="Arthur Morgan | Outlaw Legacy">
<meta property="og:image" content="https://images7.alphacoders.com/136/thumb-1920-1363449.png">
```

### Vysvětlení

Při sdílení odkazu se automaticky zobrazí náhled stránky.

---

## 5. UI / UX

### Řešení

* mobile-first design
* responzivní Grid a Flexbox layouty
* plynulé animace (fade-in, reveal)
* vizuální hierarchie sekcí
* interaktivní prvky (slider, modal, timeline)

### Ukázka

```css
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

### Vysvětlení

Layout se automaticky přizpůsobuje velikosti zařízení.

---

## 6. AI integrace

### Řešení

AI byla využita při:

* návrhu struktury webu
* generování textů
* optimalizaci animací
* ladění UX a UI prvků
* návrhu interaktivních efektů (rain, lightning, canvas střelba)

### Příklad promptu

```
Vytvoř westernový cinematic web o Arthuru Morganovi bez frameworků.
```

---

## AI deník

### Prompt 1

„Navrhni strukturu westernového webu“

→ vznik layoutu sekcí

### Prompt 2

„Vytvoř canvas rain efekt“

→ implementace deště

### Prompt 3

„Optimalizuj animace pomocí Intersection Observer“

→ výkonová optimalizace

### Prompt 4

„Vytvoř honor system jako v RDR2“

→ interaktivní slider + změna UI barev

---

## Instalace a spuštění

1. Klonování repozitáře

```bash
git clone https://github.com/michalkovac978/Arthur-morgan-web.git
```

2. Otevření projektu

* otevři `index.html` ve VS Code

3. Spuštění

* použij Live Server (doporučeno)

---

## Screenshoty

* desktop verze
  ![Snímek obrazovky 2026-06-05 184520](https://github.com/user-attachments/assets/36f5a403-aaee-4f91-9630-e049466537e7)

---------------------------------------------------------------------------------------------------------- 
* mobilní verze
![Mobilní verze webu](https://github.com/user-attachments/assets/f318f9eb-00e5-4506-b879-acb3dfce5047)

![Honor System na mobilním zařízení](https://github.com/user-attachments/assets/a6e4d6a3-114d-4c4a-828e-570315589254)

![Mobilní verze – galerie a interaktivní prvky](https://github.com/user-attachments/assets/ff1f8731-fdde-465f-9940-c64a2918f7e6)

---------------------------------------------------------------------------------------------------------- 
* hero sekce
  ![Snímek obrazovky](https://github.com/user-attachments/assets/ff3d8f41-a8b4-4a83-945d-fde5a43487fa)

---------------------------------------------------------------------------------------------------------- 
* honor system
![Snímek obrazovky 2026-06-05 184054](https://github.com/user-attachments/assets/dca13ada-9dae-4791-8c41-f474151f15d2)

![Snímek obrazovky 2026-06-05 184304](https://github.com/user-attachments/assets/5800f929-0b90-46bf-a299-e7073b80bfd3)

---------------------------------------------------------------------------------------------------------- 
* gang
  ![Screenshot](https://github.com/user-attachments/assets/9f49d724-1e25-478a-997b-c94347d8830c)

---------------------------------------------------------------------------------------------------------- 

## Autor

Student projekt zaměřený na moderní frontend vývoj, optimalizaci a UX design bez použití frameworků.

Fanouškovský projekt inspirovaný hrou *Red Dead Redemption 2* od Rockstar Games.
