# PROJECT 1: INTERACTIVE TIMELINE (TEMPORAL AXIS — "WHEN")
**Course:** 21LEM301T — Indian Art Form | **Assessment:** CLA-I (10 Marks, CO1)  
**Deliverable:** [`timeline/index.html`](index.html)

---

## 1. Overview & Concept
The Interactive Timeline represents the temporal continuum of Indian art history across 30,000+ years. Rather than presenting a dry chronological list, the interface is structured as a **Flowing River of Art**, where distinct historical epochs flow naturally into one another along a central aesthetic gradient track.

### Key Features:
- **10 Curated Epochs:** Prehistoric, Indus Valley, Mauryan/Shunga, Gandhara & Mathura, Classical Gupta, Medieval Temple, Imperial Mughal, Rajput & Pahari, Colonial & Bengal School, and Contemporary Modernists.
- **32 Masterpiece Artifacts:** Complete museum provenance, dates, material specifications, and scholarly context.
- **Dynamic Category Filtering:** Instant client-side filtering by Painting, Sculpture, Architecture, Seals, and Decorative Art.
- **Floating Epoch Navigation:** Real-time scrollspy dots pinned to the right margin, allowing instant jumps between millennia.
- **Accessible Modal Dossier:** Click or keyboard-select (Enter/Space) any artifact card to open a full scholarly monograph with image credit, historical context, and formal institutional sources.

---

## 2. Technical Implementation
- **Markup:** Semantic HTML5 (`index.html`) using `<nav>`, `<header>`, `<main>`, `<article>`, `<section>`, and `<dialog>`-pattern modal.
- **Styles:** `css/timeline.css` extending `../shared/css/base.css` with CSS custom properties, grid layouts, and responsive breakpoints.
- **Scripts:** `js/timeline.js` reading directly from `../shared/data/artData.js`, operating with zero external dependencies.
- **Offline Reliability:** Graceful fallback placeholder gradients if external image links fail.

---

## 3. Curated Epochs & Artifact Inventory Summary
1. **Prehistoric Period (c. 30,000 – 2000 BCE):** Bhimbetka Zoo Rock, Bhimbetka Mythical Boar, Patne Engraved Ostrich Eggshell.
2. **Indus Valley Civilization (c. 3300 – 1300 BCE):** Dancing Girl of Mohenjo-daro, Priest-King, Pashupati Seal.
3. **Mauryan & Shunga Period (c. 322 – 72 BCE):** Sarnath Lion Capital, Didarganj Yakshi, Rampurva Bull Capital.
4. **Gandhara & Mathura Schools (c. 1st – 5th c. CE):** Fasting Siddhartha of Gandhara, Katra Keshavdev Seated Buddha, Standing Gandhara Buddha.
5. **Gupta Period (c. 320 – 550 CE):** Sarnath Preaching Buddha, Ajanta Cave 1 Bodhisattva Padmapani, Sultanganj Colossal Bronze Buddha.
6. **Medieval Period (c. 7th – 13th c. CE):** Chola Nataraja from Tiruvelangadu, Mahabalipuram Descent of the Ganges, Konark Sun Temple Surya.
7. **Mughal Period (c. 1526 – 1857 CE):** Jahangir Preferring a Sufi Shaikh (Bichitr), Hamzanama Folio, Taj Mahal Pietra Dura.
8. **Rajput & Pahari Schools (c. 16th – 19th c. CE):** Bani Thani of Kishangarh (Nihâl Chand), Radha & Krishna in a Grove (Kangra).
9. **Colonial & Modern Period (c. 1850 – 1947 CE):** Bharat Mata (Abanindranath Tagore), Haripura Posters (Nandalal Bose), Three Girls (Amrita Sher-Gil).
10. **Contemporary Period (1947 – Present):** Horses Series (M.F. Husain), Saurashtra / Bindu (S.H. Raza), Mahishasura (Tyeb Mehta).
