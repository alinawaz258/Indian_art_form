# PROJECT 2: INTERACTIVE ART MAP (SPATIAL AXIS — "WHERE")
**Course:** 21LEM301T — Indian Art Form | **Assessment:** CLA-I (10 Marks, CO1)  
**Deliverable:** [`art-map/index.html`](index.html)

---

## 1. Overview & Concept
The Interactive Art Map explores the spatial diffusion and geographical determinants of Indian art traditions. Instead of a decorative map with static pins, it implements an active visual interaction model:
$$\text{India} \longrightarrow \text{Region} \longrightarrow \text{Specific Center} \longrightarrow \text{Living Tradition} \longrightarrow \text{Masterpieces \& Lineages}$$

### Key Features:
- **Custom Vector SVG Cartography:** Clean, responsive vector outline of the Indian subcontinent built directly into the DOM—completely independent of external tile servers (Google Maps, Leaflet, Mapbox) for 100% offline reliability.
- **Mathematical Coordinate Projection:** Real geographic coordinates (Latitude $8^\circ\text{–}37^\circ\text{N}$, Longitude $68^\circ\text{–}97.5^\circ\text{E}$) are mathematically mapped onto the SVG viewport ($600 \times 700$ viewBox) using custom linear projection functions.
- **20 Curated Cultural Epicenters:** Spanning all six zones (North, South, East, West, Central, Northeast).
- **Bidirectional Interaction:** Hovering or clicking a map marker highlights and scrolls the associated location card in the right-hand inspection drawer; conversely, clicking a card centers and activates the corresponding pulsing map node.
- **Region Filtering:** Instant filtering by North India, South India, East India, Western India, Central India, and Northeast India.
- **Detailed Historical Monographs:** Click "Learn More" to view full dossiers covering local art movements, key motifs, hereditary artisan castes, and official Geographical Indication (GI Tag) documentation.

---

## 2. Technical Architecture
- **Markup:** `index.html` featuring a CSS Grid two-panel desktop layout (60% interactive map stage, 40% scrollable information drawer) collapsing into a stacked mobile layout.
- **Vector Rendering:** Pure SVG elements (`<path>`, `<g>`, `<circle>`, `<text>`) with CSS hardware-accelerated pulse animations (`@keyframes marker-pulse`).
- **Data Binding:** Synchronized with `../shared/data/artData.js`.
