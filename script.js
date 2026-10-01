const products = [
  {
    id: 1,
    name: 'AeroPro Noise Cancelling Headphones',
    category: 'Electronics',
    price: 2999,
    oldPrice: 4999,
    rating: 4.8,
    reviews: 1842,
    badge: 'Top deal',
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Mira Smart Watch Pro 5',
    category: 'Wearables',
    price: 4999,
    oldPrice: 6999,
    rating: 4.7,
    reviews: 1128,
    badge: 'Best seller',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Zenith 4K Smart TV 55"',
    category: 'Electronics',
    price: 42999,
    oldPrice: 52999,
    rating: 4.9,
    reviews: 642,
    badge: 'Trending',
    image:
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Luma Desk Lamp with Wireless Charging',
    category: 'Home',
    price: 2499,
    oldPrice: 3999,
    rating: 4.6,
    reviews: 876,
    badge: 'Made for work',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    name: 'Aster Perfume Gift Set',
    category: 'Beauty',
    price: 1699,
    oldPrice: 2599,
    rating: 4.7,
    reviews: 1014,
    badge: 'Fresh picks',
    image:
      'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    name: 'Urban Flex Running Shoes',
    category: 'Fashion',
    price: 2799,
    oldPrice: 4499,
    rating: 4.5,
    reviews: 2335,
    badge: 'Hot drop',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 7,
    name: 'Nexa Air Fryer 5.8L',
    category: 'Home',
    price: 6499,
    oldPrice: 8999,
    rating: 4.8,
    reviews: 1577,
    badge: 'Kitchen hero',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 8,
    name: 'Orbit Gaming Console',
    category: 'Electronics',
    price: 38999,
    oldPrice: 48999,
    rating: 4.9,
    reviews: 990,
    badge: 'Limited stock',
    image:
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 9,
    name: 'Harbor Cotton Bedding Set',
    category: 'Home',
    price: 3199,
    oldPrice: 4999,
    rating: 4.6,
    reviews: 467,
    badge: 'Cozy',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 10,
    name: 'WireFree Earbuds X',
    category: 'Electronics',
    price: 2599,
    oldPrice: 3999,
    rating: 4.7,
    reviews: 3120,
    badge: 'Must-have',
    image:
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 11,
    name: 'Tempo Travel Backpack',
    category: 'Accessories',
    price: 1999,
    oldPrice: 3499,
    rating: 4.5,
    reviews: 801,
    badge: 'Travel ready',
    image:
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 12,
    name: 'Glow Pro Facial Kit',
    category: 'Beauty',
    price: 1499,
    oldPrice: 2399,
    rating: 4.8,
    reviews: 1982,
    badge: 'Skin care',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
  }
];

const dealsGrid = document.getElementById('dealsGrid');
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const cartDrawer = document.getElementById('cartDrawer');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const subtotalBox = document.getElementById('subtotal');
const overlay = document.getElementById('overlay');
const cartToggle = document.getElementById('cartToggle');
const closeCart = document.getElementById('closeCart');

let cart = [];

function formatPrice(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
}

function renderProductCard(product) {
  const article = document.createElement('article');
  article.className = 'product-card';
  article.innerHTML = `
    <div class="product-visual">
      <img src="${product.image}" alt="${product.name}" />
      <span class="product-badge">${product.badge}</span>
    </div>
    <div class="product-body">
      <h3 class="product-title">${product.name}</h3>
      <div class="rating-row">
        <span class="stars">★★★★★</span>
        <span>${product.rating} (${product.reviews})</span>
      </div>
      <div class="product-price">
        <span class="current-price">${formatPrice(product.price)}</span>
        <span class="old-price">${formatPrice(product.oldPrice)}</span>
      </div>
      <div class="meta-row">
        <span>Free delivery</span>
        <span>4.2k sold</span>
      </div>
      <button class="add-to-cart" data-id="${product.id}">Add to cart</button>
    </div>
  `;

  return article;
}

function renderDeals() {
  const deals = products.slice(0, 4);
  dealsGrid.innerHTML = '';
  deals.forEach((product) => {
    dealsGrid.appendChild(renderProductCard(product));
  });
}

function renderProducts(filter = '') {
  const lowerFilter = filter.trim().toLowerCase();
  const visibleProducts = products.filter((product) => {
    return !lowerFilter || product.name.toLowerCase().includes(lowerFilter) || product.category.toLowerCase().includes(lowerFilter);
  });

  productsGrid.innerHTML = '';
  visibleProducts.forEach((product) => {
    productsGrid.appendChild(renderProductCard(product));
  });
}

function updateCartUI() {
  cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  subtotalBox.textContent = formatPrice(subtotal);

  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty. Add a few favorites.</p>';
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" />
          <div>
            <h4>${item.name}</h4>
            <p class="cart-price">${formatPrice(item.price)}</p>
            <div class="cart-actions">
              <div class="quantity-box">
                <button class="count-btn" data-action="decrease" data-id="${item.id}">−</button>
                <span>${item.quantity}</span>
                <button class="count-btn" data-action="increase" data-id="${item.id}">+</button>
              </div>
            </div>
          </div>
          <button class="remove-item" data-action="remove" data-id="${item.id}">Remove</button>
        </div>
      `
    )
    .join('');
}

function addToCart(productId) {
  const product = products.find((item) => item.id === Number(productId));
  if (!product) return;

  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  openCart();
}

function updateQuantity(id, action) {
  const target = cart.find((item) => item.id === id);
  if (!target) return;

  if (action === 'increase') {
    target.quantity += 1;
  }

  if (action === 'decrease') {
    target.quantity -= 1;
    if (target.quantity <= 0) {
      cart = cart.filter((item) => item.id !== id);
    }
  }

  if (action === 'remove') {
    cart = cart.filter((item) => item.id !== id);
  }

  updateCartUI();
}

function openCart() {
  cartDrawer.classList.add('open');
  overlay.classList.add('visible');
}

function closeDrawer() {
  cartDrawer.classList.remove('open');
  overlay.classList.remove('visible');
}

searchInput.addEventListener('input', (event) => {
  renderProducts(event.target.value);
});

cartToggle.addEventListener('click', openCart);
closeCart.addEventListener('click', closeDrawer);
overlay.addEventListener('click', closeDrawer);

document.addEventListener('click', (event) => {
  const addButton = event.target.closest('.add-to-cart');
  if (addButton) {
    addToCart(addButton.dataset.id);
  }

  const cartAction = event.target.closest('[data-action]');
  if (cartAction) {
    const { action, id } = cartAction.dataset;
    updateQuantity(Number(id), action);
  }
});

function startCountdown() {
  const deadline = Date.now() + 1000 * 60 * 60 * 14 + 1000 * 21 * 60;

  const tick = () => {
    const remaining = deadline - Date.now();
    if (remaining <= 0) {
      document.getElementById('countdown').textContent = '00:00:00';
      return;
    }

    const hours = String(Math.floor((remaining / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((remaining / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((remaining / 1000) % 60)).padStart(2, '0');
    document.getElementById('countdown').textContent = `${hours}:${minutes}:${seconds}`;
  };

  tick();
  setInterval(tick, 1000);
}

renderDeals();
renderProducts();
updateCartUI();
startCountdown();

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeDrawer();
  }
});

setTimeout(() => {
  closeDrawer();
}, 100);
