// ─────────────────────────────────────────────
//  MIRACELLA — main.js
// ─────────────────────────────────────────────

// available: false = "Pas encore disponible" (collier, bracelet, boucle)
// Les bagues sont disponibles

const products = [
  {
    id: 1,
    name: 'Collier Lumière',
    tagline: 'La délicatesse à l\'état pur',
    category: 'collier',
    price: 189,
    material: 'Or 18 carats, diamants 0.15 ct',
    stock: 0,
    available: false,
    icon: '✦',
    color: 'linear-gradient(135deg, #f2ede6 0%, #e8ddd0 100%)',
    badge: null,
    description: 'Ce collier fin en or 18 carats est serti de diamants taille brillant soigneusement sélectionnés. Sa chaîne délicate et son pendentif géométrique en font une pièce intemporelle, aussi bien portée au quotidien que pour les grandes occasions.',
    sizes: null,
    featured: true,
    new: false
  },
  {
    id: 2,
    name: 'Bague Étoile',
    tagline: 'L\'éclat d\'une nuit étoilée',
    category: 'bague',
    price: 245,
    material: 'Or blanc 18 carats, saphir bleu',
    stock: 5,
    available: true,
    icon: '◈',
    color: 'linear-gradient(135deg, #edf0f5 0%, #dce3ee 100%)',
    badge: 'Nouveauté',
    description: 'La Bague Étoile est une ode à la beauté nocturne. Sertie d\'un saphir bleu naturel entouré de diamants, elle capture la lumière comme une constellation. Disponible du 48 au 60.',
    sizes: ['48', '50', '52', '54', '56', '58', '60'],
    featured: true,
    new: true
  },
  {
    id: 3,
    name: 'Bracelet Céleste',
    tagline: 'Légèreté et présence',
    category: 'bracelet',
    price: 165,
    material: 'Argent 925 rhodié, perles de nacre',
    stock: 0,
    available: false,
    icon: '○',
    color: 'linear-gradient(135deg, #f5f2ee 0%, #ede8e0 100%)',
    badge: null,
    description: 'Le Bracelet Céleste marie l\'argent rhodié à des perles de nacre naturelles, créant un effet lunaire subtil au poignet. Sa fermeture en or jaune 18 carats apporte une touche bicolore élégante.',
    sizes: ['S', 'M', 'L'],
    featured: true,
    new: false
  },
  {
    id: 4,
    name: 'Boucles Soleil',
    tagline: 'Un rayon de lumière en toutes circonstances',
    category: 'boucle',
    price: 135,
    material: 'Or jaune 18 carats',
    stock: 0,
    available: false,
    icon: '✧',
    color: 'linear-gradient(135deg, #f5f0e8 0%, #ede5d0 100%)',
    badge: null,
    description: 'Les Boucles Soleil en or jaune 18 carats capturent la chaleur et la lumière dans leur forme géométrique rayonnante. Légères et confortables, elles illuminent n\'importe quel visage.',
    sizes: null,
    featured: true,
    new: false
  },
  {
    id: 5,
    name: 'Collier Aurore',
    tagline: 'La première lumière du jour',
    category: 'collier',
    price: 320,
    material: 'Or rose 18 carats, rubis 0.3 ct',
    stock: 0,
    available: false,
    icon: '✦',
    color: 'linear-gradient(135deg, #f5ede8 0%, #eeddd5 100%)',
    badge: 'Prochainement',
    description: 'Inspiré des couleurs de l\'aurore boréale, ce collier en or rose est rehaussé d\'un rubis naturel birman de 0.3 carats. Chaque pièce est numérotée et accompagnée d\'un certificat d\'authenticité.',
    sizes: null,
    featured: false,
    new: true
  },
  {
    id: 6,
    name: 'Bague Solitaire',
    tagline: 'La pureté comme philosophie',
    category: 'bague',
    price: 890,
    material: 'Or blanc 18 carats, diamant 0.5 ct',
    stock: 4,
    available: true,
    icon: '◇',
    color: 'linear-gradient(135deg, #f0f0f5 0%, #e5e5ee 100%)',
    badge: null,
    description: 'Notre solitaire signature. Un diamant rond brillant de 0.5 carat, certifié GIA, serti sur une monture en or blanc 18 carats. La quintessence de l\'élégance intemporelle. Un bijou qui se transmet.',
    sizes: ['48', '50', '52', '54', '56', '58'],
    featured: false,
    new: false
  },
  {
    id: 7,
    name: 'Bracelet Rivière',
    tagline: 'L\'eau qui trace son chemin',
    category: 'bracelet',
    price: 215,
    material: 'Or blanc 18 carats, diamants 0.8 ct total',
    stock: 0,
    available: false,
    icon: '⟡',
    color: 'linear-gradient(135deg, #eef0f5 0%, #e0e5ee 100%)',
    badge: 'Prochainement',
    description: 'Le Bracelet Rivière est un ruban de lumière qui épouse le poignet. Serti en ligne de diamants pour un total de 0.8 carat, il crée un effet continu éblouissant à chaque mouvement.',
    sizes: ['S/M', 'M/L'],
    featured: false,
    new: true
  },
  {
    id: 8,
    name: 'Boucles Éclipse',
    tagline: 'L\'ombre et la lumière',
    category: 'boucle',
    price: 178,
    material: 'Or bicolore 18 carats, onyx noir',
    stock: 0,
    available: false,
    icon: '◉',
    color: 'linear-gradient(135deg, #f0ede8 0%, #e8e3dc 100%)',
    badge: 'Prochainement',
    description: 'Les Boucles Éclipse jouent sur le contraste entre l\'or jaune et l\'onyx noir pour un effet saisissant. Leur forme circulaire évoque l\'éclipse solaire, symbole de dualité et d\'équilibre.',
    sizes: null,
    featured: false,
    new: true
  }
];

// ─── CART ───────────────────────────────────────

function getCart() {
  try {
    return JSON.parse(sessionStorage.getItem('miracella_cart') || '[]');
  } catch { return []; }
}

function saveCart(cart) {
  sessionStorage.setItem('miracella_cart', JSON.stringify(cart));
}

function addToCart(product) {
  if (!product.available) return;
  let cart = getCart();
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
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

// ─── RENDER PRODUCTS ────────────────────────────

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
    const cardClass = unavail ? 'product-card unavailable' : 'product-card';
    const clickHandler = unavail ? '' : `onclick="window.location='product.html?id=${p.id}'"`;
    const badgeHtml = unavail
      ? `<span class="unavailable-badge">Pas encore disponible</span>`
      : (p.badge ? `<span class="product-badge">${p.badge}</span>` : '');
    const priceClass = unavail ? 'product-card-price greyed' : 'product-card-price';
    const actionHtml = unavail
      ? `<span class="unavail-label">Bientôt</span>`
      : `<button class="add-btn" onclick="event.stopPropagation(); addToCart(${JSON.stringify(p).replace(/"/g, '&quot;')}); showMiniToast()">+</button>`;

    return `
      <article class="${cardClass}" ${clickHandler}>
        <div class="product-card-img" style="background:${p.color}">
          <span class="product-card-icon">${p.icon}</span>
          ${badgeHtml}
        </div>
        <div class="product-card-info">
          <span class="product-card-category">${p.category}</span>
          <h3>${p.name}</h3>
          <p class="product-card-tagline">${p.tagline}</p>
          <div class="product-card-footer">
            <span class="${priceClass}">${p.price} €</span>
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

// ─── NAVBAR SCROLL ──────────────────────────────

window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── INIT ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
});
