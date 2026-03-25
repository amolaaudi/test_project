// ─── Icons (inline SVG) ───
const ICONS = {
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  starEmpty: `<svg class="empty" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  heartFill: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  utensils: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
};

// ─── State ───
let currentPage = 'home';
let currentFilter = 'all';
let searchQuery = '';

// ─── Helpers ───
function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

function renderStars(rating, max = 5, size = 14) {
  let html = '';
  for (let i = 1; i <= max; i++) {
    html += i <= Math.round(rating) ? ICONS.star : ICONS.starEmpty;
  }
  return html;
}

function priceToSymbol(n) {
  return '$'.repeat(n);
}

function getRestaurant(id) {
  return RESTAURANTS.find(r => r.id === id);
}

function isWishlisted(id) {
  return USER_PROFILE.wishlist.includes(id);
}

function isVisited(id) {
  return USER_PROFILE.visited.includes(id);
}

function toggleWishlist(id, e) {
  if (e) e.stopPropagation();
  const idx = USER_PROFILE.wishlist.indexOf(id);
  if (idx > -1) USER_PROFILE.wishlist.splice(idx, 1);
  else USER_PROFILE.wishlist.push(id);
  renderCurrentPage();
}

function toggleVisited(id) {
  const idx = USER_PROFILE.visited.indexOf(id);
  if (idx > -1) USER_PROFILE.visited.splice(idx, 1);
  else USER_PROFILE.visited.push(id);
  renderCurrentPage();
}

// ─── Rendering ───
function renderRestaurantCard(r) {
  const wishlisted = isWishlisted(r.id);
  return `
    <div class="restaurant-card" onclick="openModal(${r.id})">
      <div class="card-image">
        <img src="${r.image}" alt="${r.name}" loading="lazy" />
        <div class="card-image-overlay"></div>
        <div class="card-rating-badge">${ICONS.star} ${r.avgRating}</div>
        <div class="card-price-badge">${priceToSymbol(r.priceRange)}</div>
        <button class="wishlist-btn ${wishlisted ? 'wishlisted' : ''}" onclick="toggleWishlist(${r.id}, event)">
          ${wishlisted ? ICONS.heartFill : ICONS.heart}
        </button>
      </div>
      <div class="card-body">
        <div class="card-name">${r.name}</div>
        <div class="card-meta">
          <span>${r.city}</span>
          <span class="card-meta-dot"></span>
          <span>${r.cuisine}</span>
        </div>
        <div class="card-tags">
          ${r.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
          ${isVisited(r.id) ? '<span class="tag green">Visitado</span>' : ''}
        </div>
      </div>
    </div>
  `;
}

function renderHome() {
  const featured = RESTAURANTS.sort((a, b) => b.avgRating - a.avgRating).slice(0, 4);
  const popular = RESTAURANTS.sort((a, b) => b.totalRatings - a.totalRatings).slice(0, 5);

  return `
    <div class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <h1>Tu diario <em>gastronómico</em>,<br>un bocado a la vez</h1>
        <p>Registra, puntúa y descubre restaurantes. Comparte tus experiencias culinarias con el mundo.</p>
        <div class="hero-stats">
          <div class="hero-stat">
            <div class="hero-stat-number">12,847</div>
            <div class="hero-stat-label">Restaurantes</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-number">89,234</div>
            <div class="hero-stat-label">Reviews</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-number">34,521</div>
            <div class="hero-stat-label">Foodies</div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Destacados</h2>
        <button class="section-link" onclick="navigateTo('restaurants')">Ver todos &rarr;</button>
      </div>
      <div class="restaurant-grid">
        ${featured.map(r => renderRestaurantCard(r)).join('')}
      </div>

      <div class="feed-section">
        <div>
          <div class="section-header">
            <h2 class="section-title">Actividad Reciente</h2>
          </div>
          ${FRIENDS_ACTIVITY.map(a => renderFeedItem(a)).join('')}
        </div>
        <div>
          <div class="sidebar-card">
            <h3>Popular esta semana</h3>
            ${popular.map((r, i) => `
              <div class="popular-item" onclick="openModal(${r.id})">
                <span class="popular-rank">${i + 1}</span>
                <div class="popular-thumb"><img src="${r.image}" alt="${r.name}" loading="lazy" /></div>
                <div class="popular-info">
                  <div class="popular-name">${r.name}</div>
                  <div class="popular-meta">${r.city} · ${r.avgRating} ${ICONS.star}</div>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="sidebar-card">
            <h3>Listas populares</h3>
            ${LISTS.slice(0, 3).map(l => `
              <div class="popular-item" onclick="navigateTo('lists')">
                <div class="popular-info">
                  <div class="popular-name">${l.title}</div>
                  <div class="popular-meta">${l.author} · ${ICONS.heart} ${l.likes}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderFeedItem(a) {
  const r = a.restaurantId ? getRestaurant(a.restaurantId) : null;
  let actionText = '';
  if (a.action === 'rated' && r) {
    actionText = `ha puntuado <span class="feed-restaurant" onclick="openModal(${r.id})">${r.name}</span>
      <span class="feed-rating">${renderStars(a.rating)}</span>`;
  } else if (a.action === 'reviewed' && r) {
    actionText = `ha reseñado <span class="feed-restaurant" onclick="openModal(${r.id})">${r.name}</span>
      <span class="feed-rating">${renderStars(a.rating)}</span>`;
  } else if (a.action === 'visited' && r) {
    actionText = `ha visitado <span class="feed-restaurant" onclick="openModal(${r.id})">${r.name}</span>`;
  } else if (a.action === 'added to wishlist' && r) {
    actionText = `quiere visitar <span class="feed-restaurant" onclick="openModal(${r.id})">${r.name}</span>`;
  } else if (a.action === 'created list') {
    actionText = `ha creado la lista "<strong>${a.listTitle}</strong>"`;
  }

  return `
    <div class="feed-item">
      <div class="feed-avatar">${getInitials(a.user)}</div>
      <div class="feed-content">
        <div class="feed-action"><strong>${a.user}</strong> ${actionText}</div>
        ${a.text ? `<div class="feed-text">"${a.text}"</div>` : ''}
        <div class="feed-time">${a.time}</div>
      </div>
    </div>
  `;
}

function renderRestaurants() {
  const cuisines = [...new Set(RESTAURANTS.map(r => r.cuisine))];
  let filtered = RESTAURANTS;

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(r =>
      r.name.toLowerCase().includes(q) ||
      r.city.toLowerCase().includes(q) ||
      r.cuisine.toLowerCase().includes(q) ||
      r.chef.toLowerCase().includes(q) ||
      r.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  if (currentFilter !== 'all') {
    if (currentFilter === 'visited') filtered = filtered.filter(r => isVisited(r.id));
    else if (currentFilter === 'wishlist') filtered = filtered.filter(r => isWishlisted(r.id));
    else if (currentFilter === 'top') filtered = filtered.filter(r => r.avgRating >= 4.5);
    else filtered = filtered.filter(r => r.cuisine === currentFilter);
  }

  return `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Restaurantes</h2>
        <span style="color: var(--text-muted); font-size: 0.85rem">${filtered.length} resultados</span>
      </div>
      <div class="filters-bar">
        <button class="filter-chip ${currentFilter === 'all' ? 'active' : ''}" onclick="setFilter('all')">Todos</button>
        <button class="filter-chip ${currentFilter === 'top' ? 'active' : ''}" onclick="setFilter('top')">Top Rated</button>
        <button class="filter-chip ${currentFilter === 'visited' ? 'active' : ''}" onclick="setFilter('visited')">Visitados</button>
        <button class="filter-chip ${currentFilter === 'wishlist' ? 'active' : ''}" onclick="setFilter('wishlist')">Wishlist</button>
        ${cuisines.slice(0, 5).map(c => `
          <button class="filter-chip ${currentFilter === c ? 'active' : ''}" onclick="setFilter('${c}')">${c}</button>
        `).join('')}
      </div>
      <div class="restaurant-grid">
        ${filtered.length > 0 ? filtered.map(r => renderRestaurantCard(r)).join('') : `
          <div class="empty-state" style="grid-column: 1 / -1">
            ${ICONS.utensils}
            <h3>No se encontraron restaurantes</h3>
            <p>Prueba con otros filtros o busca algo diferente</p>
          </div>
        `}
      </div>
    </div>
  `;
}

function renderLists() {
  return `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Listas</h2>
        <button class="btn btn-primary" style="font-size: 0.8rem; padding: 0.5rem 1.2rem">
          + Nueva Lista
        </button>
      </div>
      <div class="lists-grid">
        ${LISTS.map(l => {
          const listRestaurants = l.restaurants.map(id => getRestaurant(id)).filter(Boolean);
          return `
            <div class="list-card">
              <div class="list-posters">
                ${listRestaurants.slice(0, 4).map(r => `<img src="${r.image}" alt="${r.name}" loading="lazy" />`).join('')}
              </div>
              <div class="list-body">
                <div class="list-title">${l.title}</div>
                <div style="color: var(--text-secondary); font-size: 0.82rem; margin: 0.35rem 0 0.5rem">
                  ${l.description}
                </div>
                <div class="list-meta">
                  <span>${l.author}</span>
                  <span>·</span>
                  <span>${l.restaurants.length} restaurantes</span>
                  <span>·</span>
                  <span class="list-likes">${ICONS.heart} ${l.likes}</span>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderProfile() {
  const visitedRestaurants = USER_PROFILE.visited.map(id => getRestaurant(id)).filter(Boolean);
  const wishlistRestaurants = USER_PROFILE.wishlist.map(id => getRestaurant(id)).filter(Boolean);

  return `
    <div class="container">
      <div class="profile-header">
        <div class="profile-avatar-lg">${getInitials(USER_PROFILE.name)}</div>
        <div class="profile-info">
          <div class="profile-name">${USER_PROFILE.name}</div>
          <div class="profile-username">${USER_PROFILE.username}</div>
          <div class="profile-bio">${USER_PROFILE.bio}</div>
        </div>
        <div class="profile-stats">
          <div class="profile-stat">
            <div class="profile-stat-number">${USER_PROFILE.stats.visited}</div>
            <div class="profile-stat-label">Visitados</div>
          </div>
          <div class="profile-stat">
            <div class="profile-stat-number">${USER_PROFILE.stats.reviews}</div>
            <div class="profile-stat-label">Reviews</div>
          </div>
          <div class="profile-stat">
            <div class="profile-stat-number">${USER_PROFILE.stats.lists}</div>
            <div class="profile-stat-label">Listas</div>
          </div>
          <div class="profile-stat">
            <div class="profile-stat-number">${USER_PROFILE.stats.followers}</div>
            <div class="profile-stat-label">Followers</div>
          </div>
        </div>
      </div>

      <div class="section-header">
        <h2 class="section-title">Diario</h2>
      </div>
      <div class="diary-grid" style="margin-bottom: 3rem">
        ${visitedRestaurants.map(r => `
          <div class="diary-item" onclick="openModal(${r.id})">
            <img src="${r.image}" alt="${r.name}" loading="lazy" />
            <div class="diary-overlay">
              <div class="diary-name">${r.name}</div>
              <div class="diary-rating">${renderStars(USER_PROFILE.ratings[r.id] || 0)}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="section-header">
        <h2 class="section-title">Quiero Visitar</h2>
      </div>
      <div class="restaurant-grid">
        ${wishlistRestaurants.map(r => renderRestaurantCard(r)).join('')}
      </div>
    </div>
  `;
}

function renderTasteMatch() {
  return `
    <div class="container">
      <div class="tm-hero">
        <div class="tm-badge">✨ Powered by Forkd AI</div>
        <h2>Taste <em>Match</em></h2>
        <p>Descubre cuánto coincides gastronómicamente con otros foodies y encuentra recomendaciones basadas en gustos compartidos.</p>
      </div>

      ${TASTE_PROFILES.map(tp => {
        const commonRestaurants = tp.commonVisited.map(id => getRestaurant(id)).filter(Boolean);
        const recRestaurant = tp.recommendation ? getRestaurant(tp.recommendation.restaurantId) : null;
        const matchColor = tp.match >= 85 ? 'var(--accent)' : tp.match >= 70 ? 'var(--green)' : 'var(--blue)';
        const circumference = 2 * Math.PI * 28;
        const offset = circumference - (tp.match / 100) * circumference;

        return `
          <div class="tm-card">
            <div class="tm-card-header">
              <div class="tm-avatar" style="background: linear-gradient(135deg, ${matchColor}22, ${matchColor}11); color: ${matchColor}">
                <div class="tm-avatar-ring" style="border-top-color: ${matchColor}; border-right-color: ${matchColor}"></div>
                ${getInitials(tp.user)}
              </div>
              <div class="tm-user-info">
                <div class="tm-user-name">${tp.user}</div>
                <div class="tm-user-handle">${tp.username}</div>
                <div class="tm-traits">
                  ${tp.traits.map(t => `<span class="tm-trait">${t}</span>`).join('')}
                </div>
              </div>
              <div class="tm-match-score">
                <div class="tm-match-circle" style="color: ${matchColor}">
                  <svg viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.05)" />
                    <circle cx="32" cy="32" r="28" stroke="${matchColor}" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" />
                  </svg>
                  ${tp.match}%
                </div>
                <div class="tm-match-label">Match</div>
              </div>
            </div>
            <div class="tm-card-body">
              ${commonRestaurants.length > 0 ? `
                <div class="tm-section-label">Restaurantes en común</div>
                <div class="tm-common">
                  ${commonRestaurants.map(r => `
                    <div class="tm-common-item" onclick="openModal(${r.id})">
                      <div class="tm-common-thumb"><img src="${r.image}" alt="${r.name}" loading="lazy" /></div>
                      <span class="tm-common-name">${r.name}</span>
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              <div class="tm-ai-insight">
                <div class="tm-ai-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"/><path d="M10 21h4"/></svg>
                  Análisis Forkd AI
                </div>
                <div class="tm-ai-text">${tp.aiInsight}</div>
              </div>

              ${recRestaurant ? `
                <div class="tm-section-label">Recomendación para ti</div>
                <div class="tm-recommendation" onclick="openModal(${recRestaurant.id})">
                  <div class="tm-rec-thumb"><img src="${recRestaurant.image}" alt="${recRestaurant.name}" loading="lazy" /></div>
                  <div>
                    <div class="tm-rec-label">Basado en ${tp.user}</div>
                    <div class="tm-rec-name">${recRestaurant.name} · ${recRestaurant.city}</div>
                    <div class="tm-rec-reason">${tp.recommendation.reason}</div>
                  </div>
                </div>
              ` : ''}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ─── Modal ───
function openModal(id) {
  const r = getRestaurant(id);
  if (!r) return;

  const visited = isVisited(r.id);
  const wishlisted = isWishlisted(r.id);

  document.getElementById('modal-overlay').innerHTML = `
    <div class="modal" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeModal()">${ICONS.close}</button>
      <div class="modal-hero">
        <img src="${r.image}" alt="${r.name}" />
        <div class="modal-hero-overlay"></div>
        <div class="modal-hero-content">
          <h2>${r.name}</h2>
          <div class="modal-hero-meta">
            <span>${ICONS.mapPin} ${r.city}, ${r.country}</span>
            <span>·</span>
            <span>${r.cuisine}</span>
            <span>·</span>
            <span>Chef: ${r.chef}</span>
          </div>
        </div>
      </div>
      <div class="modal-body">
        <div class="modal-info-grid">
          <div class="modal-info-item">
            <div class="modal-info-value">${r.avgRating}</div>
            <div class="modal-info-label">Puntuación</div>
          </div>
          <div class="modal-info-item">
            <div class="modal-info-value">${r.totalRatings.toLocaleString()}</div>
            <div class="modal-info-label">Valoraciones</div>
          </div>
          <div class="modal-info-item">
            <div class="modal-info-value">${priceToSymbol(r.priceRange)}</div>
            <div class="modal-info-label">Precio</div>
          </div>
          <div class="modal-info-item">
            <div class="modal-info-value">${r.year}</div>
            <div class="modal-info-label">Fundado</div>
          </div>
        </div>

        <p class="modal-description">${r.description}</p>

        <div class="modal-tags">
          ${r.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>

        <div class="modal-actions">
          <button class="btn ${visited ? 'btn-visited' : 'btn-primary'}" onclick="toggleVisited(${r.id}); openModal(${r.id})">
            ${visited ? ICONS.check : ICONS.utensils}
            ${visited ? 'Visitado' : 'Marcar Visitado'}
          </button>
          <button class="btn btn-secondary" onclick="toggleWishlist(${r.id}); openModal(${r.id})">
            ${wishlisted ? ICONS.heartFill : ICONS.heart}
            ${wishlisted ? 'En Wishlist' : 'Wishlist'}
          </button>
          <button class="btn btn-secondary">
            ${ICONS.edit}
            Escribir Review
          </button>
        </div>

        <h3 class="modal-reviews-header">Reviews (${r.reviews.length})</h3>
        ${r.reviews.map(rev => `
          <div class="review-item">
            <div class="review-header">
              <div class="review-user">
                <div class="review-avatar">${getInitials(rev.user)}</div>
                <span class="review-name">${rev.user}</span>
                <span class="review-date">${new Date(rev.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              </div>
              <div class="review-stars">${renderStars(rev.rating)}</div>
            </div>
            <p class="review-text">${rev.text}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  const overlay = document.getElementById('modal-overlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ─── Navigation ───
function navigateTo(page) {
  currentPage = page;
  currentFilter = 'all';
  searchQuery = '';
  document.querySelector('.search-box input').value = '';
  renderCurrentPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });
}

function setFilter(filter) {
  currentFilter = filter;
  renderCurrentPage();
}

function renderCurrentPage() {
  const content = document.getElementById('page-content');
  switch (currentPage) {
    case 'home': content.innerHTML = renderHome(); break;
    case 'restaurants': content.innerHTML = renderRestaurants(); break;
    case 'lists': content.innerHTML = renderLists(); break;
    case 'tastematch': content.innerHTML = renderTasteMatch(); break;
    case 'profile': content.innerHTML = renderProfile(); break;
  }
}

// ─── Search ───
function handleSearch(e) {
  searchQuery = e.target.value;
  if (currentPage !== 'restaurants') {
    currentPage = 'restaurants';
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.page === 'restaurants');
    });
  }
  renderCurrentPage();
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  renderCurrentPage();

  document.getElementById('modal-overlay').addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
