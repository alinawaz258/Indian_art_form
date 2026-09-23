/**
 * Interactive Timeline — JavaScript
 * 
 * Renders the timeline from shared ART_DATA,
 * handles filtering, modal display, and period navigation.
 */

(function() {
  'use strict';

  // ===== DOM References =====
  const timelineContainer = document.getElementById('timeline-container');
  const periodNavList = document.getElementById('period-nav-list');
  const modalOverlay = document.getElementById('artifact-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalTags = document.getElementById('modal-tags');
  const modalMeta = document.getElementById('modal-meta');
  const modalContent = document.getElementById('modal-content');
  const modalImage = document.getElementById('modal-image');
  const filterButtons = document.querySelectorAll('.filter-btn');

  // ===== Color Helper =====
  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // Category color mapping
  const categoryColors = {
    'Painting': { bg: 'var(--color-ochre)', class: 'tag--ochre' },
    'Sculpture': { bg: 'var(--color-terra)', class: 'tag--terra' },
    'Architecture/Sculpture': { bg: 'var(--color-vermilion)', class: 'tag--vermilion' },
    'Seal': { bg: 'var(--color-indigo)', class: 'tag--indigo' },
    'Decorative Art': { bg: 'var(--color-sage)', class: 'tag--sage' }
  };

  // ===== Build Timeline =====
  function buildTimeline() {
    const periods = ART_DATA.periods;
    const artifacts = ART_DATA.artifacts;

    periods.forEach(function(period) {
      // Get artifacts for this period
      const periodArtifacts = artifacts.filter(function(a) { return a.period === period.id; });

      // Create period section
      const section = document.createElement('section');
      section.className = 'period-section';
      section.id = 'period-' + period.id;
      section.setAttribute('data-period', period.id);

      // Period marker
      const marker = document.createElement('div');
      marker.className = 'period-marker';
      marker.innerHTML = `
        <div class="period-marker__content" style="border-color: ${period.color}">
          <div class="period-marker__dot" style="background: ${period.color}" aria-hidden="true"></div>
          <h2 class="period-marker__name">${period.name}</h2>
          <p class="period-marker__dates" style="color: ${period.color}">${period.dateRange}</p>
          <p class="period-marker__desc">${period.description}</p>
        </div>
      `;
      section.appendChild(marker);

      // Artifact grid
      if (periodArtifacts.length > 0) {
        const grid = document.createElement('div');
        grid.className = 'artifact-grid';

        periodArtifacts.forEach(function(artifact) {
          const card = createArtifactCard(artifact, period);
          grid.appendChild(card);
        });

        section.appendChild(grid);
      } else {
        const empty = document.createElement('p');
        empty.className = 'period-empty';
        empty.textContent = 'No artifacts currently documented for this period.';
        section.appendChild(empty);
      }

      timelineContainer.appendChild(section);

      // Add period nav dot
      const navItem = document.createElement('li');
      const navDot = document.createElement('a');
      navDot.className = 'period-nav__dot';
      navDot.href = '#period-' + period.id;
      navDot.style.background = period.color;
      navDot.setAttribute('aria-label', period.name);
      navDot.innerHTML = `<span class="period-nav__label">${period.name}</span>`;
      navDot.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.getElementById('period-' + period.id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
      navItem.appendChild(navDot);
      periodNavList.appendChild(navItem);
    });
  }

  // ===== Create Artifact Card =====
  function createArtifactCard(artifact, period) {
    const card = document.createElement('article');
    card.className = 'artifact-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'View details for ' + artifact.title);
    card.setAttribute('data-category', artifact.category);
    card.setAttribute('data-id', artifact.id);

    const catColor = categoryColors[artifact.category] || { class: 'tag--ochre' };

    // Image area
    const hasRealImage = artifact.imageUrl && artifact.imageUrl.length > 0;
    let imageHTML;
    if (hasRealImage) {
      imageHTML = `
        <div class="artifact-card__image">
          <img src="${artifact.imageUrl}" alt="${artifact.title}" loading="lazy" 
               onerror="this.parentElement.innerHTML='<div class=\\'artifact-card__image-placeholder\\' style=\\'background: linear-gradient(135deg, ${period.color}, ${hexToRgba(period.color, 0.6)});\\'>${artifact.artForm}</div>'">
        </div>`;
    } else {
      imageHTML = `
        <div class="artifact-card__image">
          <div class="artifact-card__image-placeholder" style="background: linear-gradient(135deg, ${period.color}, ${hexToRgba(period.color, 0.6)});">
            ${artifact.artForm}
          </div>
        </div>`;
    }

    card.innerHTML = `
      ${imageHTML}
      <div class="artifact-card__body">
        <span class="artifact-card__category ${catColor.class}">${artifact.category}</span>
        <h3 class="artifact-card__title">${artifact.title}</h3>
        <p class="artifact-card__date">${artifact.date}</p>
        <p class="artifact-card__location">${artifact.location}</p>
      </div>
    `;

    // Click handler
    card.addEventListener('click', function() {
      openModal(artifact, period);
    });

    // Keyboard handler
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(artifact, period);
      }
    });

    return card;
  }

  // ===== Modal =====
  let lastFocusedElement = null;

  function openModal(artifact, period) {
    lastFocusedElement = document.activeElement;

    const catColor = categoryColors[artifact.category] || { class: 'tag--ochre' };

    // Image
    const hasRealImage = artifact.imageUrl && artifact.imageUrl.length > 0;
    if (hasRealImage) {
      modalImage.innerHTML = `<img src="${artifact.imageUrl}" alt="${artifact.title}" 
        onerror="this.parentElement.innerHTML='<div class=\\'modal__image-placeholder\\' style=\\'background: linear-gradient(135deg, ${period.color}, ${hexToRgba(period.color, 0.5)});\\'>${artifact.artForm}</div>'">`;
    } else {
      modalImage.innerHTML = `<div class="modal__image-placeholder" style="background: linear-gradient(135deg, ${period.color}, ${hexToRgba(period.color, 0.5)});">${artifact.artForm}</div>`;
    }
    modalImage.style.background = `linear-gradient(135deg, ${period.color}, ${hexToRgba(period.color, 0.5)})`;

    // Tags
    modalTags.innerHTML = `
      <span class="tag ${catColor.class}">${artifact.category}</span>
      <span class="tag">${artifact.artForm}</span>
    `;

    // Title
    modalTitle.textContent = artifact.title;

    // Meta
    modalMeta.innerHTML = `
      <div class="modal__meta-item">
        <span class="modal__meta-label">Period</span>
        ${period.name}
      </div>
      <div class="modal__meta-item">
        <span class="modal__meta-label">Date</span>
        ${artifact.date}
      </div>
      <div class="modal__meta-item">
        <span class="modal__meta-label">Location</span>
        ${artifact.location}
      </div>
      <div class="modal__meta-item">
        <span class="modal__meta-label">Art Form</span>
        ${artifact.artForm}
      </div>
    `;

    // Content sections
    let contentHTML = '';

    contentHTML += `
      <div class="modal__section">
        <h3 class="modal__section-title">Description</h3>
        <p>${artifact.description}</p>
      </div>
    `;

    if (artifact.historicalContext) {
      contentHTML += `
        <div class="modal__section">
          <h3 class="modal__section-title">Historical Context</h3>
          <p>${artifact.historicalContext}</p>
        </div>
      `;
    }

    if (artifact.significance) {
      contentHTML += `
        <div class="modal__section">
          <h3 class="modal__section-title">Artistic & Cultural Significance</h3>
          <p>${artifact.significance}</p>
        </div>
      `;
    }

    if (artifact.sources && artifact.sources.length > 0) {
      contentHTML += `
        <div class="modal__section">
          <h3 class="modal__section-title">Sources</h3>
          <ul class="modal__sources">
            ${artifact.sources.map(function(s) { return '<li>' + s + '</li>'; }).join('')}
          </ul>
        </div>
      `;
    }

    if (artifact.imageCredit) {
      contentHTML += `
        <div class="modal__section">
          <p class="text-caption"><strong>Image credit:</strong> ${artifact.imageCredit}</p>
        </div>
      `;
    }

    modalContent.innerHTML = contentHTML;

    // Show modal
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

  // Modal event listeners
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // ===== Filtering =====
  let currentFilter = 'all';

  filterButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Update active button
      filterButtons.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');

      currentFilter = btn.getAttribute('data-filter');
      applyFilter();
    });
  });

  function applyFilter() {
    const cards = document.querySelectorAll('.artifact-card');
    let visibleCount = 0;

    cards.forEach(function(card) {
      const category = card.getAttribute('data-category');
      if (currentFilter === 'all' || category === currentFilter) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    // Show/hide period sections that have no visible cards
    document.querySelectorAll('.period-section').forEach(function(section) {
      const visibleCards = section.querySelectorAll('.artifact-card:not(.hidden)');
      const emptyMsg = section.querySelector('.period-empty');
      if (visibleCards.length === 0 && currentFilter !== 'all') {
        section.style.display = 'none';
      } else {
        section.style.display = '';
      }
    });
  }

  // ===== Scroll-based Period Nav Highlighting =====
  function updatePeriodNavOnScroll() {
    const sections = document.querySelectorAll('.period-section');
    const dots = document.querySelectorAll('.period-nav__dot');
    const scrollPos = window.scrollY + window.innerHeight / 3;

    let activeIndex = 0;
    sections.forEach(function(section, index) {
      if (section.offsetTop <= scrollPos) {
        activeIndex = index;
      }
    });

    dots.forEach(function(dot, index) {
      if (index === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // Throttled scroll listener
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(function() {
      scrollTimeout = null;
      updatePeriodNavOnScroll();
    }, 100);
  });

  // ===== Initialize =====
  buildTimeline();
  updatePeriodNavOnScroll();

})();
