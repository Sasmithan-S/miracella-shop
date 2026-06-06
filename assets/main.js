// ─────────────────────────────────────────────
//  MIRACELLA — main.js
// ─────────────────────────────────────────────

const products = [
  {
    id: 1,
    name: 'Bague Initiale Or — M',
    tagline: 'Ton initiale, portée avec élégance',
    category: 'bague',
    price: 49,
    material: 'Acier inoxydable plaqué or 18 carats, zircon blanc',
    stock: 15,
    available: true,
    image: 'assets/bague_initiale_or.jpg',
    badge: 'Best-seller',
    description: 'La bague initiale signature Miracella. Un anneau ouvert en acier plaqué or 18 carats, orné d\'un zircon serti griffes d\'un côté et de ton initiale gravée en script de l\'autre. Ajustable, elle s\'adapte à toutes les tailles. Un cadeau personnalisé qui ne se démode jamais.',
    sizes: null,
    details: ['Acier inoxydable plaqué or 18 carats', 'Zircon blanc serti griffes', 'Bague ouverte ajustable', 'Livré dans l\'écrin Miracella'],
    featured: true,
    new: false
  },
  {
    id: 2,
    name: 'Bague Initiale Or — E',
    tagline: 'Une lettre, mille souvenirs',
    category: 'bague',
    price: 49,
    material: 'Acier inoxydable plaqué or 18 carats, zircon blanc',
    stock: 12,
    available: true,
    image: 'assets/bague_initiale_e.jpg',
    badge: null,
    description: 'La même finesse de la bague initiale Miracella, déclinée en lettre "E" en script doré. L\'anneau ouvert en or 18 carats porte d\'un côté l\'initiale calligraphiée et de l\'autre un zircon scintillant. Un bijou fin, moderne et porteur de sens.',
    sizes: null,
    details: ['Acier inoxydable plaqué or 18 carats', 'Zircon blanc serti griffes', 'Initiale "E" en script', 'Bague ouverte ajustable'],
    featured: true,
    new: false
  },
  {
    id: 3,
    name: 'Bague Solitaire Argent',
    tagline: 'L\'éclat intemporel du diamant',
    category: 'bague',
    price: 55,
    material: 'Acier inoxydable plaqué argent rhodié, zircon 5mm',
    stock: 10,
    available: true,
    image: 'assets/bague_solitaire_argent.jpg',
    badge: 'Nouveauté',
    description: 'Un solitaire d\'une pureté absolue. Cette bague en acier rhodié porte un zircon cubique taille brillant de 5mm serti sur six griffes, réplique fidèle des grandes maisons joaillières. Sa monture fine et épurée la rend aussi parfaite au quotidien qu\'en grande occasion.',
    sizes: ['50', '52', '54', '56', '58'],
    details: ['Acier plaqué argent rhodié', 'Zircon cubique 5mm taille brillant', 'Serti 6 griffes', 'Taille au choix'],
    featured: true,
    new: true
  },
  {
    id: 4,
    name: 'Bague Perle & Diamant',
    tagline: 'La dualité en un seul bijou',
    category: 'bague',
    price: 45,
    material: 'Acier inoxydable plaqué or 14 carats, zircon, perle dorée',
    stock: 18,
    available: true,
    image: 'assets/bague_perle_diamant.jpg',
    badge: null,
    description: 'Une bague ouverte aux deux extrémités contrastées : d\'un côté une perle dorée mate, de l\'autre un zircon brillant. Ce jeu de lumières et de matières crée un bijou unique, moderne et élégant. Idéale portée seule ou en stack avec d\'autres bagues fines.',
    sizes: null,
    details: ['Acier plaqué or 14 carats', 'Perle dorée mate', 'Zircon brillant', 'Bague ouverte ajustable'],
    featured: false,
    new: true
  },
  {
    id: 5,
    name: 'Bague Initiale Argent — M',
    tagline: 'La même âme, dans une touche argentée',
    category: 'bague',
    price: 49,
    material: 'Acier inoxydable plaqué argent rhodié, zircon blanc',
    stock: 14,
    available: true,
    image: 'assets/bague_initiale_argent.jpg',
    badge: null,
    description: 'La bague initiale Miracella dans sa version argentée. Même anneau ouvert ajustable, même initiale en script — cette fois dans un rhodiage argent lumineux et un zircon taille brillant. Une alternative plus fraîche et contemporaine au coloris doré.',
    sizes: null,
    details: ['Acier plaqué argent rhodié', 'Zircon blanc serti griffes', 'Initiale en script', 'Bague ouverte ajustable'],
    featured: false,
    new: false
  },
  {
    id: 6,
    name: 'Bague Papillon',
    tagline: 'Légère comme un battement d\'ailes',
    category: 'bague',
    price: 52,
    material: 'Acier inoxydable plaqué or 18 carats, zircons pavés',
    stock: 9,
    available: true,
    image: 'assets/bague_papillon.jpg',
    badge: 'Coup de cœur',
    description: 'Un papillon en vol figé dans l\'or. Les ailes sont serties de zircons pavés qui scintillent à chaque mouvement, face à un bouquet de trois pierres minutieusement posées. Cette bague ouverte est à la fois délicate et affirmée — le bijou signature pour celles qui osent.',
    sizes: null,
    details: ['Acier plaqué or 18 carats', 'Ailes pavées de zircons', 'Motif papillon sculptural', 'Bague ouverte ajustable'],
    featured: true,
    new: false
  },
  {
    id: 7,
    name: 'Bague Double Cœur',
    tagline: 'Deux cœurs, une seule bague',
    category: 'bague',
    price: 48,
    material: 'Acier inoxydable plaqué or 18 carats, zircons pavés',
    stock: 11,
    available: true,
    image: 'assets/bague_double_coeur.jpg',
    badge: null,
    description: 'Un cœur lisse, un cœur pavé — deux symboles d\'amour qui se font face sur un anneau ouvert doré. La dualité mat/brillant crée un contraste élégant et joueur. À offrir ou à se faire plaisir, cette bague incarne la tendresse avec style.',
    sizes: null,
    details: ['Acier plaqué or 18 carats', 'Un cœur lisse + un cœur pavé de zircons', 'Bague ouverte ajustable', 'Livré dans l\'écrin Miracella'],
    featured: true,
    new: true
  },
  {
    id: 8,
    name: 'Bague Feuille & Zircon',
    tagline: 'La nature sublimée par l\'or',
    category: 'bague',
    price: 54,
    material: 'Acier inoxydable plaqué or 18 carats, zircons pavés',
    stock: 7,
    available: true,
    image: 'assets/bague_feuille.jpg',
    badge: null,
    description: 'Une feuille dorée effilée enveloppe un zircon solitaire, tandis que l\'anneau se prolonge en un rang de pavé scintillant. Ce design asymétrique inspiré de la nature est à la fois poétique et luxueux. Une pièce qui attire le regard et retient l\'attention.',
    sizes: null,
    details: ['Acier plaqué or 18 carats', 'Motif feuille sculpté', 'Pavé de zircons sur l\'anneau', 'Bague ouverte ajustable'],
    featured: false,
    new: true
  },
  {
    id: 9,
    name: 'Bague Initiale Or — T',
    tagline: 'Gravée dans l\'or, portée pour toujours',
    category: 'bague',
    price: 49,
    material: 'Acier inoxydable plaqué or 18 carats, zircon blanc',
    stock: 13,
    available: true,
    image: 'assets/bague_initiale_t.jpg',
    badge: null,
    description: 'La bague initiale Miracella, lettre "T". L\'initiale en script doré se pare d\'un zircon serti griffes sur l\'anneau ouvert. Ajustable et intemporelle, elle est le cadeau parfait à personnaliser — pour soi ou pour offrir à une personne chère.',
    sizes: null,
    details: ['Acier plaqué or 18 carats', 'Zircon blanc serti griffes', 'Initiale "T" en script', 'Bague ouverte ajustable'],
    featured: false,
    new: false
  }
];

// ─── CART ────────────────────────────────────────

function getCart() {
  try { return JSON.parse(sessionStorage.getItem('miracella_cart') || '[]'); }
  catch { return []; }
}
function saveCart(cart) {
  sessionStorage.setItem('miracella_cart', JSON.stringify(cart));
}
function addToCart(product) {
  if (!product.available) return;
  let cart = getCart();
  const existing = cart.find(i => i.id === product.id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  saveCart(cart);
  updateCartCount();
}
function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

// ─── RENDER PRODUCTS ─────────────────────────────

function renderProducts(mode, limit, containerId, excludeId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let list = [...products];
  if (mode === 'featured') list = list.filter(p => p.featured);
  else if (mode === 'new') list = list.filter(p => p.new);
  else if (mode === 'related') list = list.filter(p => p.id !== excludeId);
  else if (mode !== 'all') list = list.filter(p => p.category === mode);
  if (limit > 0) list = list.slice(0, limit);

  container.innerHTML = list.map(p => {
    const unavail = !p.available;
    const badgeHtml = unavail
      ? `<span class="product-badge unavail-badge">Bientôt</span>`
      : (p.badge ? `<span class="product-badge">${p.badge}</span>` : '');
    const clickHandler = unavail ? '' : `onclick="window.location='product.html?id=${p.id}'"`;
    const actionHtml = unavail
      ? `<span class="unavail-label">Bientôt disponible</span>`
      : `<button class="add-btn" onclick="event.stopPropagation(); addToCart(${JSON.stringify(p).replace(/"/g, '&quot;')}); showMiniToast()">+</button>`;

    return `
      <article class="product-card${unavail ? ' unavailable' : ''}" ${clickHandler}>
        <div class="product-card-img">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
          ${badgeHtml}
          ${unavail ? '<div class="img-overlay"></div>' : ''}
        </div>
        <div class="product-card-info">
          <h3>${p.name}</h3>
          <p class="product-card-tagline">${p.tagline}</p>
          <div class="product-card-footer">
            <span class="product-card-price${unavail ? ' greyed' : ''}">${p.price} €</span>
            ${actionHtml}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function showMiniToast() {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.id = 'toast';
    toast.textContent = '✓ Ajouté au panier';
    document.body.appendChild(toast);
  }
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ─── NAVBAR SCROLL ───────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});

document.addEventListener('DOMContentLoaded', () => { updateCartCount(); });
