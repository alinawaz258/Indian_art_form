# KALĀVṚTTA (कला-वृत्त): THE WHEEL OF INDIAN ART
## University Academic Submission for Course: 21LEM301T — INDIAN ART FORM
### Assessment: Continuous Learning Assessment – I (CLA-I) | Total Weightage: 30 Marks

---

## 1. Executive Summary & Assessment Mapping

This academic project fulfills the complete requirements for the **CLA-I Assessment (30 Marks)** in the course **21LEM301T: Indian Art Form**. Rather than treating the three tasks as disconnected exercises, they are united under the overarching curatorial framework **Kalāvṛtta (कला-वृत्त)**, which examines Indian visual expression across three essential axes:

```
               ┌────────────────────────────────────────────────────────┐
               │              KALĀVṚTTA (कला-वृत्त)                      │
               │         The Continuous Cycle of Indian Art             │
               └──────────────────────────┬─────────────────────────────┘
                                          │
        ┌─────────────────────────────────┼────────────────────────────────┐
        ▼                                 ▼                                ▼
┌──────────────────────┐        ┌──────────────────────┐        ┌──────────────────────┐
│  PROJECT 1: TIMELINE │        │  PROJECT 2: ART MAP  │        │  PROJECT 3: FUSION   │
│  Axis: Temporal      │        │  Axis: Spatial       │        │  Axis: Synthesis     │
│  "WHEN"              │        │  "WHERE"             │        │  "HARMONIZATION"     │
│  10 Marks | CO1      │        │  10 Marks | CO1      │        │  10 Marks | CO2      │
└──────────────────────┘        └──────────────────────┘        └──────────────────────┘
```

| Component | Course Outcome | Marks | Description | Implemented Deliverable |
| :--- | :---: | :---: | :--- | :--- |
| **1. Interactive Timeline** | **CO1** | **10** | Digital timeline with clickable artifact cards across periods with rich historical context. | [`timeline/index.html`](timeline/index.html) — 32 artifacts across 10 epochs, dynamic category filtering, modal dossier. |
| **2. Interactive Art Map** | **CO1** | **10** | Digital map highlighting key locations, art traditions, local movements, and artists. | [`art-map/index.html`](art-map/index.html) — Custom SVG India cartography, 20 pinpointed locations, regional grouping. |
| **3. Regional Painting Fusion** | **CO2** | **10** | Creative synthesis combining elements from 2+ regional traditions with scholarly defense. | [`fusion/documentation/fusion-doc.html`](fusion/documentation/fusion-doc.html) — *Vriksha-Chaitanya* (Madhubani × Gond), motif explorer, and 5-student execution guide. |
| **TOTAL** | **CO1 + CO2** | **30** | **Complete CLA-I Submission Portfolio** | **[`index.html`](index.html)** — Master Curatorial Portal |

---

## 2. Directory Structure

```
Indian_art_form/
├── index.html                    # Master Exhibition Portal & Rubric Mapping
├── README.md                     # Comprehensive Academic & Technical Dossier
├── shared/
│   ├── css/
│   │   └── base.css              # Shared cultural palette, typography, reset & layout
│   └── data/
│       └── artData.js            # Shared scholarly data model (32 artifacts, 20 locations, 8 traditions)
├── timeline/
│   ├── index.html                # Project 1: Interactive Timeline Interface
│   ├── css/
│   │   └── timeline.css          # Vertical flowing timeline & period marker styles
│   ├── js/
│   │   └── timeline.js           # Filtering, modal controller & dynamic rendering
│   └── README.md                 # Detailed Timeline project documentation
├── art-map/
│   ├── index.html                # Project 2: Interactive Art Map Interface
│   ├── css/
│   │   └── art-map.css           # Two-panel layout, marker pulse & responsive map CSS
│   ├── js/
│   │   └── art-map.js            # Vector coordinate projection & bidirectional interaction
│   └── README.md                 # Detailed Art Map project documentation
├── fusion/
│   ├── artwork/
│   │   └── madhubani-gond-fusion.jpg  # Generated high-resolution digital concept artwork
│   ├── concept/
│   │   └── fusion_analysis.md    # 7-combination evaluation & comparative matrix
│   ├── documentation/
│   │   ├── fusion-doc.html       # Interactive showcase with motif explorer & pigment analysis
│   │   └── README.md             # Detailed Fusion project documentation
│   └── references/               # Curatorial notes & regional painting bibliography
└── research/
    └── sources/
        └── bibliography.md       # Museum, ASI, UNESCO & scholarly citations
```

---

## 3. Quick-Start & Local Execution

This suite was architected with a strict **zero-dependency philosophy**:
- **No Node.js or npm packages required**
- **No external API keys or cloud databases required**
- **No fragile third-party map tile servers (e.g. Mapbox/Leaflet) required**
- **100% offline functionality**

### Running the Application:
1. **Direct Browser Execution:**  
   Simply double-click [`index.html`](index.html) to open the master portal in any modern web browser (Chrome, Firefox, Safari, Edge).
2. **Local HTTP Server (Optional):**  
   If desired, run any local server from the project root:
   ```powershell
   # Using Python 3:
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

---

## 4. Academic Rationale & Curatorial Defense

### Project 1: Interactive Timeline (Temporal Dimension — "WHEN")
* **Chronological Scope:** Spans 10 distinct epochs from the Upper Palaeolithic and Mesolithic (30,000 BCE) through the Indus Valley, Mauryan, Kushan (Gandhara/Mathura), Classical Gupta, Medieval Temple, Imperial Mughal, Rajput/Pahari, Colonial Bengal School, to Contemporary Modernists.
* **Selection Defense:** Rather than presenting an arbitrary collection of famous monuments, the 32 artifacts were selected because each marks a critical technological or philosophical turning point in Indian art history:
  - *Dancing Girl of Mohenjo-daro:* Earliest mastery of lost-wax (*cire perdue*) metallurgy and secular naturalism.
  - *Sarnath Lion Capital:* Adoption of monumental polished stone carving to project imperial Buddhist state ethics (*Dhamma*).
  - *Didarganj Yakshi:* Formulation of the classical Indian feminine aesthetic canon (*alambana vibhava*).
  - *Ajanta Padmapani:* Mastery of spiritual *fresco secco* and psychological empathy in wall painting.
  - *Chola Nataraja:* Supreme metaphysical visual synthesis of cosmic time, destruction, and liberation.
  - *Bharat Mata by Abanindranath Tagore:* Decolonial nationalist reclamation of indigenous visual identity.

### Project 2: Interactive Art Map (Spatial Dimension — "WHERE")
* **Geographical Distribution:** Covers 20 key centers across 6 cultural regions:
  - **North:** Srinagar (Kani Shawl), Kishangarh (Romantic Miniature), Mathura (Red Sandstone), Delhi (Mughal Atelier), Lucknow (Chikankari).
  - **South:** Thanjavur (Gesso & Chola Bronze), Mahabalipuram (Granite Monoliths), Mattancherry (Pancha-varna Murals), Hampi (Vijayanagara), Mysore (Makki Gold), Srikalahasti (Pen Kalamkari), Cheriyal (Narrative Scrolls).
  - **East:** Kalighat (Urban Wash), Santiniketan (Contextual Modernism), Raghurajpur (Odia Pattachitra), Jitwarpur (Mithila).
  - **West:** Ajanta (Buddhist Cave Murals), Dahanu (Warli Tribal Art), Nirona (Castor-oil Rogan), Old Goa (Indo-Portuguese Syncretism).
  - **Central:** Bhimbetka (Prehistoric Caves), Patangarh (Gond Art).
  - **Northeast:** Sualkuchi (Assamese Muga Silk).
* **Cartographic Insight:** The map illustrates how physical geography dictated artistic media: alluvial Gangetic plains fostered terracotta and sandstone sculpture; coastal deltas (Coromandel) fostered mineral-rich cotton textile dyeing (*Kalamkari*); forested highlands (Vindhyas and Sahyadris) fostered organic tribal wall painting using earth clay and rice paste (*Warli*, *Gond*).

### Project 3: Regional Painting Fusion (Synthesis — "HARMONIZATION")
* **The Selected Synthesis:** **Madhubani (Mithila) Painting (Bihar) × Gond Tribal Art (Madhya Pradesh)**.
* **Academic Rationale:** Rather than relying on the predictable syllabus example of *Warli + Kalamkari*, this project investigated 7 candidate combinations and selected Madhubani and Gond art because both share a deep commitment to sacred ecology while employing contrasting graphic systems:
  - *Madhubani* provides geometric architectural framing, double-line inking, and dense, flat planar *kachni* cross-hatching.
  - *Gond* provides fluid biomorphic contours, optical stippled dot-and-dash infills (*bindu*, *danna*), and vibrant, luminous chromatic contrasts.
* **The Artwork (*Vriksha-Chaitanya*):** Fuses both traditions along the central axis of the cosmic *Tree of Life*. The lower terrestrial and aquatic plane features Madhubani double-line fish (*Matsya*) and lotuses, while the upper arboreal canopy blossoms into Gond's patterned spirit deer and birds. The central trunk serves as a metamorphic column where geometric borders dissolve into rhythmic tree-bark stippling.

---

## 5. Comprehensive Viva Voce Examination Guide

During university evaluation, the team can defend their work using the following scholarly answers:

### 1. What makes your timeline genuinely interactive rather than a static webpage?
> **Answer:** The timeline features bidirectional, stateful interaction: users can filter artifacts dynamically across five functional categories (Sculpture, Painting, Architecture, Seals, Decorative Art) without page reloads; clicking any artifact triggers a comprehensive modal dossier with high-resolution imagery, historical context, and museum provenance; and a fixed floating period sidebar tracks scroll position in real time, allowing direct jumping between epochs.

### 2. Why did you select these specific artifacts?
> **Answer:** Artifacts were selected based on three criteria: historical veracity (documented by ASI and national museums), stylistic representation (each exemplifies the peak technique of its era, such as Gupta Chunar carving or Chola bronze casting), and iconographic evolution (illustrating the transition from prehistoric animism to classical anthropomorphism and modern abstraction).

### 3. Why did you choose these particular historical periods?
> **Answer:** The 10 periods align with established art historical taxonomy used by the Archaeological Survey of India and major academic treatises (such as Susan Huntington's *The Art of Ancient India*). They reflect real sociocultural shifts: from prehistoric foraging bands to Bronze Age urbanization, imperial Mauryan consolidation, regional classical maturity, courtly miniature patronage, and colonial deconstruction.

### 4. What sources did you use to verify your data?
> **Answer:** We prioritized primary institutional authorities: the Archaeological Survey of India (ASI), National Museum (New Delhi), Victoria & Albert Museum, Metropolitan Museum of Art, UNESCO World Heritage monographs, and standard scholarly works by Ananda Coomaraswamy, Walter Spink, Milo Cleveland Beach, and Ebba Koch.

### 5. Why is the Didarganj Yakshi historically significant?
> **Answer:** Discovered at Pataliputra in 1917, she represents the crowning achievement of life-sized stone sculpture in the round from ancient India. She is celebrated for her mirror-like "Mauryan polish" and for defining the classical Indian feminine aesthetic canon—characterized by full breasts, a narrow waist (*damaru-madhya*), and rhythmic drapery folds.

### 6. Why did you select these locations for the map?
> **Answer:** The 20 locations were curated to ensure balanced representation across all six geographic regions of India. Locations were chosen because each is the acknowledged epicenter of a major artistic tradition, with several holding UNESCO World Heritage status or Geographical Indication (GI) tags.

### 7. What does the map demonstrate about the geographic distribution of Indian art?
> **Answer:** The map demonstrates that Indian art is directly shaped by local geology, flora, and trade geography: hard basalt in Maharashtra enabled monumental cave excavations at Ajanta; mineral-rich river basins in Andhra Pradesh enabled complex mordant-dyed textiles at Srikalahasti; and the forested tracts of Central India fostered nature-venerating tribal art at Bhimbetka and Patangarh.

### 8. Why did you select Madhubani and Gond art for the fusion project?
> **Answer:** We intentionally avoided the standard syllabus example (Warli + Kalamkari) to demonstrate independent research. Madhubani and Gond were selected because they represent two powerful, living folk-tribal traditions that share an ecological worldview (the sacredness of nature) while possessing contrasting visual grammars—rigid geometric hatching versus fluid optical pointillism—offering a fertile ground for creative synthesis.

### 9. What are the key similarities between the two styles?
> **Answer:** Both traditions operate in two-dimensional, non-perspectival pictorial space; both reject empty background space by infilling surfaces with intricate repetitive textures; both derive their traditional pigments from organic and mineral earth sources; and both view art not as commercial decoration, but as an auspicious ritual invocation of blessings and cosmic protection.

### 10. What are their primary differences?
> **Answer:** Madhubani relies on crisp, continuous double-parallel black lines with interior linear hatching (*kachni*) and flat solid color fields (*bharni*); Gond art uses fluid single-contour biomorphic outlines filled with hundreds of microscopic dots (*bindu*) or rice-grain dashes (*danna*) that produce an optical vibration. Furthermore, Madhubani figures are strictly planar and frontally oriented, whereas Gond creatures float gracefully in dynamic, anti-gravitational compositions.

### 11. Which elements did you combine and why?
> **Answer:** We combined Madhubani's double-line borders, geometric hatching, and aquatic iconography (fish and lotuses) on the terrestrial base with Gond's fluid branches, animal silhouettes (horned deer), and optical dot-texturing in the upper canopy. The central tree trunk serves as the structural synthesis seam where Madhubani chevrons dissolve into Gond's vertical stippled wood grain.

### 12. How does your final artwork demonstrate synthesis rather than a simple split collage?
> **Answer:** The synthesis is evolutionary and holistic. The composition is framed by a unified border combining Madhubani geometric teeth with Gond wave ribbons. In the central trunk, there is no abrupt dividing line; rather, the horizontal decorative bands gradually transform into organic vertical stipples. Both idioms share a common conceptual theme—the *Tree of Life*—demonstrating that cultural synthesis occurs through shared meaning rather than superficial juxtaposition.

### 13. What did the team learn from this project?
> **Answer:** We gained a deep appreciation for the continuity of Indian art: how ancient motifs found on prehistoric cave walls and Harappan seals continue to vibrate in modern tribal paintings. Technically, we learned how to design accessible, client-side digital exhibition tools that communicate complex cultural scholarship without reliance on heavy frameworks.

### 14. What technical decisions did you make and why?
> **Answer:** We chose vanilla HTML5, CSS3, and ES6 JavaScript with zero dependencies to ensure 100% offline reliability during examination. We designed a custom vector SVG map of India rather than using external map APIs (like Leaflet or Google Maps) to prevent broken tile errors and avoid API key requirements.

### 15. Why choose this interaction model for the map and timeline?
> **Answer:** We used an information-architecture model of *Overview First, Zoom and Filter, Details on Demand*. On the timeline, users see the macro flow of millennia before drilling down into specific artifacts. On the map, users see the all-India distribution before focusing on regional clusters and local craft lineages.

### 16. What sources support your historical claims?
> **Answer:** Every date, material description, and iconographic reading is backed by verified museum catalog numbers (National Museum New Delhi, British Museum, V&A), Archaeological Survey of India excavation reports, and peer-reviewed art history publications (e.g., Huntington, Coomaraswamy, Spink).

---

## 6. Project Credits & Academic Integrity Statement

* **Course Code:** 21LEM301T — Indian Art Form
* **Evaluation Metric:** Continuous Learning Assessment – I (CLA-I)
* **Team Allocation (5 Members):**
  - *Student 1 (Lead UX & Frontend Architect):* Portal architecture, shared CSS system, responsive layouts.
  - *Student 2 (Timeline Curator & Historian):* Artifact database research, period chronologies, museum citations.
  - *Student 3 (Cartographer & Spatial Analyst):* Vector SVG mapping, coordinate projection, regional categorization.
  - *Student 4 (Fusion Concept Lead & Stylistic Analyst):* Regional combination evaluation, motif breakdown, pigment research.
  - *Student 5 (Studio Execution & Documentation Lead):* Physical execution blueprint, student manual, viva defense coordination.

* **Declaration on Artwork Creation:**  
  In compliance with academic integrity guidelines, we explicitly declare that the visual image displayed in [`fusion/artwork/madhubani-gond-fusion.jpg`](fusion/artwork/madhubani-gond-fusion.jpg) represents a **digitally generated concept visual** created to test and validate compositional balance, color harmony, and motif compatibility. The complete **physical artwork specification** provided in [`fusion/concept/fusion_analysis.md`](fusion/concept/fusion_analysis.md) contains the precise material requirements and five-phase procedural manual for students to reproduce the work manually on 300 GSM handmade paper.
