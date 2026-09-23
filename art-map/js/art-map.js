/**
 * Interactive Art Map — JavaScript
 * 
 * Creates an SVG map of India with positioned markers,
 * handles location selection, filtering, and detail modal.
 */

(function() {
  'use strict';

  // ===== DOM References =====
  const mapContainer = document.getElementById('map-container');
  const locationList = document.getElementById('location-list');
  const locationCount = document.getElementById('location-count');
  const modalOverlay = document.getElementById('location-modal');
  const modalClose = document.getElementById('loc-modal-close');
  const modalTitle = document.getElementById('loc-modal-title');
  const modalMeta = document.getElementById('loc-modal-meta');
  const modalContent = document.getElementById('loc-modal-content');
  const modalHeader = document.getElementById('loc-modal-header');
  const filterButtons = document.querySelectorAll('.filter-btn');

  // ===== Configuration =====
  const SVG_WIDTH = 600;
  const SVG_HEIGHT = 700;
  // India bounding box (approximate)
  const LAT_MIN = 7.5;
  const LAT_MAX = 37;
  const LNG_MIN = 68;
  const LNG_MAX = 97.5;

  // Region colors
  const regionColors = {
    'North India': '#C2863A',
    'South India': '#C44D32',
    'East India': '#2E4057',
    'Western India': '#6B7F5E',
    'Central India': '#8B5E3C',
    'Northeast India': '#5B4A8A'
  };

  // ===== Coordinate Mapping =====
  function latLngToSVG(lat, lng) {
    const x = ((lng - LNG_MIN) / (LNG_MAX - LNG_MIN)) * SVG_WIDTH;
    const y = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * SVG_HEIGHT;
    return { x: x, y: y };
  }

  // ===== State =====
  let selectedLocationId = null;
  let currentRegionFilter = 'all';

  // ===== Build SVG Map =====
  function buildMap() {
    // Simplified India outline SVG path
    const indiaPath = `M 290 30 
      C 280 35, 260 40, 250 48 
      L 230 55 C 220 58, 210 55, 195 60 
      L 175 65 C 160 68, 150 75, 140 80 
      L 125 90 C 115 100, 100 108, 90 120 
      L 80 135 C 70 150, 65 160, 60 175 
      L 55 195 C 50 210, 48 225, 50 240 
      L 55 260 C 58 275, 62 285, 65 295 
      L 70 310 C 72 320, 68 330, 65 340 
      L 60 360 C 55 375, 52 385, 50 400 
      L 48 420 C 48 435, 55 445, 60 455 
      L 70 470 C 78 478, 85 482, 90 485 
      L 105 490 C 115 492, 125 498, 130 505 
      L 140 520 C 148 535, 155 548, 165 558 
      L 180 575 C 190 582, 200 590, 215 598 
      L 235 610 C 245 618, 255 628, 268 638 
      L 285 650 C 295 655, 305 660, 315 655 
      L 330 645 C 340 638, 348 628, 350 618 
      L 355 600 C 358 585, 360 570, 365 555 
      L 372 538 C 378 525, 385 515, 392 505 
      L 402 490 C 408 480, 412 470, 415 458 
      L 420 440 C 425 425, 430 415, 435 405 
      L 440 390 C 442 378, 440 368, 435 358 
      L 428 342 C 422 330, 418 320, 420 308 
      L 425 295 C 428 285, 432 275, 435 268 
      L 440 255 C 448 240, 455 228, 458 215 
      L 460 200 C 460 185, 458 175, 455 165 
      L 450 150 C 445 140, 438 132, 430 125 
      L 418 115 C 408 108, 398 102, 390 95 
      L 378 85 C 368 78, 358 72, 348 66 
      L 338 58 C 328 52, 318 45, 310 40 
      L 298 33 Z`;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', `0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`);
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'Map of India showing art locations');
    svg.style.width = '100%';
    svg.style.height = '100%';

    // India outline
    const outline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    outline.setAttribute('d', indiaPath);
    outline.setAttribute('class', 'map-outline');
    svg.appendChild(outline);

    // Region labels
    const regionLabels = [
      { text: 'North', x: 220, y: 120 },
      { text: 'South', x: 310, y: 530 },
      { text: 'East', x: 410, y: 300 },
      { text: 'West', x: 100, y: 350 },
      { text: 'Central', x: 260, y: 320 }
    ];

    regionLabels.forEach(function(label) {
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', label.x);
      text.setAttribute('y', label.y);
      text.setAttribute('class', 'map-region-label');
      text.textContent = label.text;
      svg.appendChild(text);
    });

    // Place markers for each location
    ART_DATA.locations.forEach(function(location) {
      const pos = latLngToSVG(location.coordinates.lat, location.coordinates.lng);

      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      group.setAttribute('class', 'map-marker');
      group.setAttribute('data-id', location.id);
      group.setAttribute('data-region', location.region);
      group.setAttribute('tabindex', '0');
      group.setAttribute('role', 'button');
      group.setAttribute('aria-label', location.name + ', ' + location.state);

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', pos.x);
      circle.setAttribute('cy', pos.y);
      circle.setAttribute('r', '6');

      // Color by region
      const color = regionColors[location.region] || '#C2863A';
      circle.style.fill = color;

      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', pos.x + 10);
      label.setAttribute('y', pos.y + 4);
      label.setAttribute('class', 'map-marker-label');
      label.textContent = location.name;

      group.appendChild(circle);
      group.appendChild(label);

      // Click handler
      group.addEventListener('click', function() {
        selectLocation(location.id);
      });

      // Keyboard handler
      group.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectLocation(location.id);
        }
      });

      svg.appendChild(group);
    });

    mapContainer.appendChild(svg);
  }

  // ===== Build Location List =====
  function buildLocationList() {
    const locations = ART_DATA.locations;
    
    // Group by region
    const regions = {};
    locations.forEach(function(loc) {
      if (!regions[loc.region]) {
        regions[loc.region] = [];
      }
      regions[loc.region].push(loc);
    });

    // Region order
    const regionOrder = ['North India', 'South India', 'East India', 'Western India', 'Central India', 'Northeast India'];

    locationList.innerHTML = '';

    regionOrder.forEach(function(regionName) {
      const locs = regions[regionName];
      if (!locs || locs.length === 0) return;

      // Region header
      const header = document.createElement('div');
      header.className = 'region-group__title';
      header.textContent = regionName;
      header.setAttribute('data-region', regionName);
      locationList.appendChild(header);

      // Location cards
      locs.forEach(function(loc) {
        const card = document.createElement('div');
        card.className = 'loc-card';
        card.setAttribute('data-id', loc.id);
        card.setAttribute('data-region', loc.region);
        card.setAttribute('tabindex', '0');

        card.innerHTML = `
          <h3 class="loc-card__name">${loc.name}</h3>
          <p class="loc-card__state">${loc.state} · ${loc.region}</p>
          <p class="loc-card__tradition">${loc.artTradition}</p>
          <button class="loc-card__more" data-id="${loc.id}">Learn More →</button>
        `;

        // Click to select on map
        card.addEventListener('click', function(e) {
          if (e.target.classList.contains('loc-card__more')) {
            openLocationModal(loc);
          } else {
            selectLocation(loc.id);
          }
        });

        card.addEventListener('keydown', function(e) {
          if (e.key === 'Enter') {
            selectLocation(loc.id);
          }
        });

        locationList.appendChild(card);
      });
    });

    updateLocationCount();
  }

  // ===== Select Location =====
  function selectLocation(id) {
    // Deselect previous
    document.querySelectorAll('.map-marker.active').forEach(function(m) { m.classList.remove('active'); });
    document.querySelectorAll('.loc-card.active').forEach(function(c) { c.classList.remove('active'); });

    selectedLocationId = id;

    // Highlight marker
    const marker = document.querySelector('.map-marker[data-id="' + id + '"]');
    if (marker) {
      marker.classList.add('active');
    }

    // Highlight card and scroll to it
    const card = document.querySelector('.loc-card[data-id="' + id + '"]');
    if (card) {
      card.classList.add('active');
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // ===== Location Modal =====
  let lastFocusedElement = null;

  function openLocationModal(loc) {
    lastFocusedElement = document.activeElement;

    const color = regionColors[loc.region] || '#C2863A';
    modalHeader.style.background = `linear-gradient(90deg, ${color}, ${color}88)`;

    modalTitle.textContent = loc.name;

    modalMeta.innerHTML = `
      <div class="modal__meta-item">
        <span class="modal__meta-label">State</span>
        ${loc.state}
      </div>
      <div class="modal__meta-item">
        <span class="modal__meta-label">Region</span>
        ${loc.region}
      </div>
      <div class="modal__meta-item">
        <span class="modal__meta-label">Art Tradition</span>
        ${loc.artTradition}
      </div>
    `;

    let contentHTML = '';

    contentHTML += `
      <div class="modal__section">
        <h3 class="modal__section-title">About</h3>
        <p>${loc.description}</p>
      </div>
    `;

    if (loc.historicalContext) {
      contentHTML += `
        <div class="modal__section">
          <h3 class="modal__section-title">Historical Context</h3>
          <p>${loc.historicalContext}</p>
        </div>
      `;
    }

    if (loc.artMovement) {
      contentHTML += `
        <div class="modal__section">
          <h3 class="modal__section-title">Art Movement / Tradition</h3>
          <p>${loc.artMovement}</p>
        </div>
      `;
    }

    if (loc.motifs) {
      contentHTML += `
        <div class="modal__section">
          <h3 class="modal__section-title">Key Motifs &amp; Features</h3>
          <p>${loc.motifs}</p>
        </div>
      `;
    }

    if (loc.artists) {
      contentHTML += `
        <div class="modal__section">
          <h3 class="modal__section-title">Notable Artists / Communities</h3>
          <p>${loc.artists}</p>
        </div>
      `;
    }

    if (loc.sources && loc.sources.length > 0) {
      contentHTML += `
        <div class="modal__section">
          <h3 class="modal__section-title">Sources</h3>
          <ul class="modal__sources">
            ${loc.sources.map(function(s) { return '<li>' + s + '</li>'; }).join('')}
          </ul>
        </div>
      `;
    }

    modalContent.innerHTML = contentHTML;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalOverlay.focus();
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
  });

  // ===== Filtering =====
  filterButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterButtons.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentRegionFilter = btn.getAttribute('data-region');
      applyFilter();
    });
  });

  function applyFilter() {
    // Filter markers
    document.querySelectorAll('.map-marker').forEach(function(marker) {
      const region = marker.getAttribute('data-region');
      if (currentRegionFilter === 'all' || region === currentRegionFilter) {
        marker.classList.remove('hidden');
      } else {
        marker.classList.add('hidden');
      }
    });

    // Filter location cards
    document.querySelectorAll('.loc-card').forEach(function(card) {
      const region = card.getAttribute('data-region');
      if (currentRegionFilter === 'all' || region === currentRegionFilter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });

    // Filter region headers
    document.querySelectorAll('.region-group__title').forEach(function(header) {
      const region = header.getAttribute('data-region');
      if (currentRegionFilter === 'all' || region === currentRegionFilter) {
        header.style.display = '';
      } else {
        header.style.display = 'none';
      }
    });

    updateLocationCount();
  }

  function updateLocationCount() {
    const visible = document.querySelectorAll('.loc-card:not(.hidden)').length;
    const total = ART_DATA.locations.length;
    if (currentRegionFilter === 'all') {
      locationCount.textContent = total + ' locations across India';
    } else {
      locationCount.textContent = visible + ' of ' + total + ' locations · ' + currentRegionFilter;
    }
  }

  // ===== Initialize =====
  buildMap();
  buildLocationList();

})();
