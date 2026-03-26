# Hotel Garni Zum Grauen Bären — Website

> Professionelle Website für das Hotel Garni Zum Grauen Bären in Bregenz am Bodensee.

**Lead Score: 76/100 — TIER 1 HOT** 🔥

---

## 🏨 Das Geschäft

- **Name:** Hotel Garni Zum Grauen Bären
- **Adresse:** Kirchstraße 10, 6900 Bregenz, Österreich
- **Telefon:** +43 5574 421 78
- **Website:** Keine eigene Website (Stand: März 2026)
- **Preis-Level:** €€€ (3-4 Sterne, Garni-Hotel)
- **Services:** Hotelzimmer, Frühstück, Seeblick-Zimmer
- **Vibe:** Traditionelles österreichisches Hotel, Gemütlichkeit, alpine Gastlichkeit

---

## 💡 Lead-Potenzial

### Problem
**Keine eigene Website = Abhängigkeit von Booking.com, Expedia & Co.**

| Plattform | Provision |
|---|---|
| Booking.com | 15–20% pro Buchung |
| Expedia | 15–25% pro Buchung |
| HRS | 12–18% pro Buchung |
| Hotels.com | 10–15% pro Buchung |

### Einsparpotenzial

| Kennzahl | Wert |
|---|---|
| Geschätzte Buchungen/Monat | 20 |
| Ø Buchungswert | €120 |
| **Provision/Monat (Ø 20%)** | **€480** |
| **Provision/Jahr** | **€5.760** |
| **Mit eigener Website (Direktbuchung)** | **€0 Provision** |

> **Jede Buchung über Booking.com kostet euch 20% Provision** — mit einer eigenen Website und Direktbuchung spart ihr das. Bei 20 Buchungen/Monat sind das €5.760/Jahr, die direkt in eurer Kasse bleiben.

### Timing
- **Sommer-Saison Bodensee** beginnt im Mai/Juni — idealer Zeitpunkt für einen Launch
- Gäste suchen jetzt (März/April) nach Unterkünften für die Sommersaison
- **Jetzt investieren = pünktlich zur Hochsaison live sein**

---

## 🎨 Design

- **Farbschema:** Tiefes Waldgrün (#2D5016) · Warmes Creme (#FAF8F0) · Honig-Gold (#C8A84B)
- **Typografie:** Playfair Display (Serif-Headings) · DM Sans (Body)
- **Stil:** Klassisch österreichisches Hotel — gemütlich, authentisch, einladend
- **Bilder:** Unsplash (hohe Qualität, alpine/hotelbezogene Stockfotos)

---

## 📁 Projektstruktur

```
hotel-grauer-baer/
├── app/
│   ├── layout.tsx      # Root Layout mit Metadata
│   ├── page.tsx        # Komplette One-Page Website
│   └── globals.css     # Tailwind + Custom CSS
├── public/
│   └── output.css      # Kompiliertes Tailwind CSS
├── package.json
├── tailwind.config.ts
├── postcss.config.js
└── README.md
```

---

## 🚀 Installation & Deployment

### Lokale Entwicklung

```bash
cd hotel-grauer-baer
npm install
npx tailwindcss -i ./app/globals.css -o ./public/output.css --watch
npm run dev
```

### Build

```bash
npm run build
```

### Coolify Deployment

```bash
# 1. Auf Server / in Coolify klonen
git clone https://github.com/YOUR_GITHUB_USER/hotel-grauer-baer.git
cd hotel-grauer-baer

# 2. Dependencies installieren
npm install

# 3. Tailwind CSS kompilieren
npx tailwindcss -i ./app/globals.css -o ./public/output.css

# 4. Build erstellen
npm run build

# 5. In Coolify:
#    - New Project → Add Resource → Static App
#    - Build Command: npm run build
#    - Publish Directory: .next
```

### Alternative: Statischer Export

Falls ein simpler statischer Host gewünscht ist:

```bash
# next.config.js anpassen für static export
# module.exports = { output: 'export' }
npm run build
# → Output in /out Ordner → auf beliebigen Webserver
```

---

## 📝 Seitenstruktur

1. **Hero** — Fullscreen Bodensee-Bild, Hotelname, CTAs
2. **Info Strip** — Adresse, Telefon, "Bregenz · Bodensee"
3. **Willkommen** — Two-Column, Lobby/Breakfast Bild + Willkommenstext
4. **Zimmer** — 3 Raumtypen: Einzelzimmer (ab €75), Doppelzimmer (ab €110), Suite (ab €150)
5. **Frühstück** — Bild + regionale Produkte Liste
6. **Lage** — Bodensee, Pfänder, Bregenz Festival, Grenznah
7. **Bewertungen** — 3 Google-Testimonials
8. **Kontakt** — Anfrageformular + Adresse + Google Maps
9. **Footer** — Name, Adresse, Links

---

## 🔧 Technischer Stack

| Technologie | Version |
|---|---|
| Next.js | 15.x |
| React | 19.x |
| TypeScript | 5.x |
| Tailwind CSS | 3.4.x |
| Google Fonts | Playfair Display + DM Sans |

---

## ✨ Nächste Schritte (Optional)

- [ ] Echte Hotelbilder einpflegen (nicht Stockfotos)
- [ ] Booking System Integration (Calendly, Direct Booking Tool)
- [ ] SEO-Optimierung (Google Business Profile verknüpfen)
- [ ] WhatsApp Button für schnelle Anfragen
- [ ] Mehrsprachigkeit (EN)
- [ ] Blog/News Section für saisonale Inhalte

---

*Erstellt mit Next.js 15, TypeScript & Tailwind CSS · Designed für Hotel Garni Zum Grauen Bären, Bregenz*
