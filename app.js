const categories = [
  { name: "Handmade Jewellery", slug: "jewellery", image: "photo-1611652022419-a9419f74343d" },
  { name: "Home Decor", slug: "home decor", image: "photo-1616486338812-3dadae4b4ace" },
  { name: "Wall Hangings", slug: "wall hanging", image: "photo-1618221195710-dd6b41faaea6" },
  { name: "Wooden Crafts", slug: "wooden", image: "photo-1610701596007-11502861dcfa" },
  { name: "Clay & Pottery", slug: "clay", image: "photo-1578749556568-bc2c40e68b61" },
  { name: "Handcrafted Bags", slug: "bag", image: "photo-1544816155-12df9643f363" },
  { name: "Traditional Art", slug: "art", image: "photo-1579783902614-a3fb3927b6a5" },
  { name: "Gift Collections", slug: "gift", image: "photo-1513201099705-a9746e1e201f" },
  { name: "Eco-Friendly Crafts", slug: "eco", image: "photo-1606760227091-3dd870d97f1d" },
  { name: "Customized Products", slug: "custom", image: "photo-1513364776144-60967b0f800f" }
];

const initialProducts = [
  { id: "necklace", name: "Handmade Beaded Necklace", category: "Handmade Jewellery", price: 349, original: 449, rating: 4.8, reviews: 28, image: "photo-1611652022419-a9419f74343d", description: "A joyful strand of hand-selected beads, lovingly assembled for a little everyday colour.", materials: "Glass beads, cotton thread", dimensions: "42 cm + 5 cm extender", stock: 12, bestseller: true },
  { id: "jhumka", name: "Traditional Jhumka Earrings", category: "Handmade Jewellery", price: 249, original: 349, rating: 4.9, reviews: 42, image: "photo-1630019852942-f89202989a59", description: "Classic bell-shaped jhumkas with delicate detailing, made to make every moment feel festive.", materials: "Brass alloy, glass stones", dimensions: "4 cm drop", stock: 18, bestseller: true },
  { id: "macrame", name: "Macrame Wall Hanging", category: "Wall Hangings", price: 799, original: 999, rating: 4.8, reviews: 19, image: "photo-1618221195710-dd6b41faaea6", description: "Knotted by hand in soft natural cotton. A calm, textured centrepiece for your favourite wall.", materials: "100% cotton cord, mango wood", dimensions: "45 × 65 cm", stock: 7, bestseller: true },
  { id: "dreamcatcher", name: "Handmade Dream Catcher", category: "Wall Hangings", price: 499, original: 649, rating: 4.6, reviews: 15, image: "photo-1513519245088-0e12902e5a38", description: "A little handmade charm for a peaceful corner, finished with soft feathers and cotton thread.", materials: "Cotton thread, wood hoop, feathers", dimensions: "22 cm diameter", stock: 9, bestseller: false },
  { id: "claypot", name: "Decorative Clay Pot", category: "Clay & Pottery", price: 399, original: 499, rating: 4.7, reviews: 23, image: "photo-1578749556568-bc2c40e68b61", description: "Shaped by hand from natural clay and finished with earthy, artisan details.", materials: "Natural terracotta clay", dimensions: "14 cm tall", stock: 14, bestseller: true },
  { id: "tray", name: "Hand-Painted Wooden Tray", category: "Wooden Crafts", price: 649, original: 799, rating: 4.9, reviews: 17, image: "photo-1610701596007-11502861dcfa", description: "A useful little serving tray featuring a cheerful hand-painted floral motif.", materials: "Sustainable mango wood, natural paints", dimensions: "30 × 20 cm", stock: 6, bestseller: false },
  { id: "crochetbag", name: "Crochet Handbag", category: "Handcrafted Bags", price: 899, original: 1199, rating: 4.8, reviews: 21, image: "photo-1591561954557-26941169b49e", description: "A roomy, slow-made crochet bag that brings a touch of craft to your everyday.", materials: "Cotton yarn, wooden button", dimensions: "28 × 24 cm", stock: 5, bestseller: true, custom: true },
  { id: "keychain", name: "Handmade Keychain", category: "Customized Products", price: 99, original: 149, rating: 4.5, reviews: 36, image: "photo-1531058020387-3be344556be6", description: "A tiny hand-finished keepsake to bring a little cheer to your keys or favourite bag.", materials: "Cotton thread, wooden charm", dimensions: "8 cm", stock: 30, bestseller: false, custom: true },
  { id: "coasters", name: "Resin Art Coaster Set", category: "Home Decor", price: 449, original: 599, rating: 4.7, reviews: 12, image: "photo-1603006905003-be475563bc59", description: "A set of four individually poured coasters, each with its own lovely swirl of colour.", materials: "Resin, cork backing", dimensions: "10 cm each · set of 4", stock: 11, bestseller: false },
  { id: "terracotta", name: "Terracotta Jewellery Set", category: "Handmade Jewellery", price: 599, original: 749, rating: 4.8, reviews: 16, image: "photo-1617038220319-276d3cfab638", description: "Earthy, lightweight terracotta jewellery inspired by traditional Indian motifs.", materials: "Hand-painted terracotta, cotton thread", dimensions: "Necklace 24 cm · earrings 5 cm", stock: 8, bestseller: true },
  { id: "frame", name: "Handmade Photo Frame", category: "Home Decor", price: 349, original: 449, rating: 4.6, reviews: 14, image: "photo-1513519245088-0e12902e5a38", description: "Frame a favourite memory in a thoughtfully finished frame with a one-of-a-kind feel.", materials: "Reclaimed wood, glass", dimensions: "15 × 20 cm", stock: 10, bestseller: false },
  { id: "diya", name: "Decorative Diya Set", category: "Clay & Pottery", price: 199, original: 279, rating: 4.9, reviews: 32, image: "photo-1603006905003-be475563bc59", description: "A set of four small hand-shaped diyas to make festive evenings glow a little warmer.", materials: "Natural terracotta, hand-applied colour", dimensions: "7 cm each · set of 4", stock: 24, bestseller: true },
  { id: "basket", name: "Handcrafted Bamboo Basket", category: "Eco-Friendly Crafts", price: 499, original: 649, rating: 4.7, reviews: 11, image: "photo-1606760227091-3dd870d97f1d", description: "A versatile woven basket made with care from natural bamboo for a more considered home.", materials: "Natural bamboo", dimensions: "24 × 18 cm", stock: 4, bestseller: false },
  { id: "tote", name: "Embroidered Tote Bag", category: "Handcrafted Bags", price: 549, original: 699, rating: 4.8, reviews: 25, image: "photo-1590874103328-eac38a683ce7", description: "A dependable everyday tote with hand-embroidered details and plenty of room for your day.", materials: "Cotton canvas, cotton embroidery thread", dimensions: "38 × 40 cm", stock: 13, bestseller: true },
  { id: "cards", name: "Handmade Greeting Card Set", category: "Gift Collections", price: 149, original: 199, rating: 4.6, reviews: 18, image: "photo-1513201099705-a9746e1e201f", description: "A set of five textured, hand-finished cards for notes worth keeping.", materials: "Recycled cotton paper", dimensions: "A6 · set of 5", stock: 25, bestseller: false },
  { id: "showpiece", name: "Miniature Clay Showpiece", category: "Clay & Pottery", price: 299, original: 399, rating: 4.5, reviews: 9, image: "photo-1578749556568-bc2c40e68b61", description: "A small hand-moulded clay keepsake, full of personality and lovely on a shelf.", materials: "Natural clay, mineral pigments", dimensions: "9 cm tall", stock: 0, bestseller: false },
  { id: "bouquet", name: "Handmade Flower Bouquet", category: "Gift Collections", price: 699, original: 899, rating: 4.9, reviews: 20, image: "photo-1490750967868-88aa4486c946", description: "Flowers that stay lovely: a colourful bouquet made petal by petal from soft fabric.", materials: "Cotton fabric, paper wrap", dimensions: "30 cm bouquet", stock: 7, bestseller: true },
  { id: "wallart", name: "Traditional Wall Art", category: "Traditional Art", price: 999, original: 1299, rating: 4.8, reviews: 13, image: "photo-1579783902614-a3fb3927b6a5", description: "A vibrant, hand-painted art piece inspired by the richness of traditional Indian folk art.", materials: "Handmade paper, natural pigments, wood frame", dimensions: "30 × 40 cm", stock: 5, bestseller: true },
  { id: "namekeychain", name: "Customized Name Keychain", category: "Customized Products", price: 199, original: 249, rating: 4.7, reviews: 31, image: "photo-1531058020387-3be344556be6", description: "A personalised name charm, made to order and finished by hand just for you.", materials: "Wood, acrylic paint, cotton cord", dimensions: "8–10 cm", stock: 20, bestseller: false, custom: true },
  { id: "hamper", name: "Handmade Gift Hamper", category: "Gift Collections", price: 1299, original: 1599, rating: 5.0, reviews: 8, image: "photo-1513201099705-a9746e1e201f", description: "A ready-to-gift bundle of small handmade joys, carefully packed with a personal note.", materials: "A thoughtful mix of artisan-made pieces", dimensions: "Gift box · approx. 30 × 25 cm", stock: 6, bestseller: true }
].map((product, index) => ({ ...product, newest: index < 4, imageUrl: `https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=700&q=80` }));

const STORE = {
  cart: "mayon-cart-v1",
  wishlist: "mayon-wishlist-v1",
  coupon: "mayon-coupon-v1",
  orders: "mayon-orders-v1",
  products: "mayon-products-v1",
  account: "mayon-demo-account-v1",
  searches: "mayon-searches-v1"
};
const readStore = (key, fallback) => {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
};
const saveStore = (key, value) => localStorage.setItem(key, JSON.stringify(value));
let products = readStore(STORE.products, initialProducts);
let cart = readStore(STORE.cart, []);
let wishlist = readStore(STORE.wishlist, []);
let coupon = readStore(STORE.coupon, "");
let orders = readStore(STORE.orders, []);
let demoAccount = readStore(STORE.account, null);
let recentSearches = readStore(STORE.searches, []);
let activeCategory = "all";
let activeFilter = "all";
let searchTerm = "";
let maxPrice = 1500;
let minRating = false;
let stockOnly = false;
let listView = false;
let toastTimer;
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const formatPrice = amount => `₹${Number(amount).toLocaleString("en-IN")}`;
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
const imageUrl = product => product.imageUrl || `https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=700&q=80`;
const productById = id => products.find(product => product.id === id);
const subtotalValue = () => cart.reduce((sum, item) => sum + (productById(item.id)?.price || 0) * item.qty, 0);
const discountValue = () => {
  const subtotal = subtotalValue();
  return coupon === "MAYON10" ? Math.round(subtotal * 0.1) : coupon === "CRAFT15" && subtotal >= 999 ? Math.round(subtotal * 0.15) : 0;
};
const deliveryValue = () => subtotalValue() === 0 || subtotalValue() >= 999 ? 0 : 50;
const totalValue = () => Math.max(0, subtotalValue() - discountValue() + deliveryValue());

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2500);
}

function productCard(product) {
  const discount = Math.max(0, Math.round((1 - product.price / product.original) * 100));
  const saved = wishlist.includes(product.id);
  const badge = discount >= 20 ? `${discount}% off` : product.bestseller ? "Bestseller" : product.newest ? "Just arrived" : "Handmade";
  return `<article class="product-card" data-product="${escapeHTML(product.id)}">
    <div class="product-image-wrap"><img class="product-image" src="${escapeHTML(imageUrl(product))}" alt="${escapeHTML(product.name)}" loading="lazy">
      <span class="product-badge ${discount > 20 ? "sale" : ""}">${badge}</span>
      <button class="wishlist-button ${saved ? "saved" : ""}" data-action="wishlist" data-id="${escapeHTML(product.id)}" aria-label="${saved ? "Remove from" : "Add to"} wishlist">${saved ? "♥" : "♡"}</button>
      <button class="quick-add" data-action="add" data-id="${escapeHTML(product.id)}">Add to bag · ${formatPrice(product.price)}</button>
    </div>
    <div class="product-info"><span class="product-category">${escapeHTML(product.category)}</span><span class="product-name">${escapeHTML(product.name)}</span>
      <div class="product-meta"><span class="product-price">${formatPrice(product.price)} <span class="original-price">${formatPrice(product.original)}</span></span><span class="rating">★ ${Number(product.rating).toFixed(1)}</span></div>
      <span class="stock-note ${product.stock ? "" : "out-of-stock"}">${product.stock ? product.stock <= 3 ? `Only ${product.stock} left` : "In stock" : "Temporarily unavailable"}</span>
      <p class="product-description">${escapeHTML(product.description)}</p>
    </div>
  </article>`;
}

function renderCategories() {
  $("#categoryGrid").innerHTML = categories.map(category => `<button class="category-card" data-category="${escapeHTML(category.name)}">
    <span class="category-image"><img src="https://images.unsplash.com/${category.image}?auto=format&fit=crop&w=500&q=75" alt="${escapeHTML(category.name)}" loading="lazy"></span>
    <span>${escapeHTML(category.name)}</span>
  </button>`).join("");
  $("#categoryFilters").innerHTML = categories.map(category => `<label class="check-row"><input type="checkbox" value="${escapeHTML(category.name)}" class="category-checkbox"><span>${escapeHTML(category.name)}</span></label>`).join("");
}

function getVisibleProducts() {
  let visible = products.filter(product => {
    const matchesText = !searchTerm || `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesFilter = activeFilter === "all" || (activeFilter === "bestseller" && product.bestseller) || (activeFilter === "new" && product.newest) || (activeFilter === "under500" && product.price < 500);
    return matchesText && matchesCategory && matchesFilter && product.price <= maxPrice && (!minRating || product.rating >= 4) && (!stockOnly || product.stock > 0);
  });
  const sort = $("#sortSelect")?.value || "popular";
  if (sort === "low") visible.sort((a, b) => a.price - b.price);
  if (sort === "high") visible.sort((a, b) => b.price - a.price);
  if (sort === "rating") visible.sort((a, b) => b.rating - a.rating);
  if (sort === "newest") visible.sort((a, b) => Number(b.newest) - Number(a.newest));
  if (sort === "popular") visible.sort((a, b) => Number(b.bestseller) - Number(a.bestseller));
  return visible;
}

function renderProducts() {
  const visible = getVisibleProducts();
  $("#productGrid").classList.toggle("list-view", listView);
  $("#productGrid").innerHTML = visible.map(productCard).join("");
  $("#resultsCount").textContent = searchTerm || activeCategory !== "all" || activeFilter !== "all"
    ? `${visible.length} ${visible.length === 1 ? "treasure" : "treasures"} found`
    : `Showing all ${visible.length} lovely treasures`;
  $("#emptyState").classList.toggle("hidden", visible.length > 0);
  $("#productGrid").classList.toggle("hidden", visible.length === 0);
  $("#categoryFilters").querySelectorAll(".category-checkbox").forEach(input => { input.checked = input.value === activeCategory; });
  $("#minPriceLabel").textContent = "0";
  $("#maxPriceLabel").textContent = maxPrice.toLocaleString("en-IN");
}

function renderCounts() {
  $("#cartCount").textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  $("#wishlistCount").textContent = wishlist.length;
  $("#drawerCartCount").textContent = `(${cart.reduce((sum, item) => sum + item.qty, 0)})`;
  $("#accountOpen").textContent = demoAccount ? `Hi, ${demoAccount.name.split(" ")[0]}` : "Sign in";
}

function renderCart() {
  renderCounts();
  $("#cartItems").innerHTML = cart.length ? cart.map(item => {
    const product = productById(item.id);
    if (!product) return "";
    return `<div class="cart-line"><img src="${escapeHTML(imageUrl(product))}" alt="">
      <div class="cart-line-info"><h3>${escapeHTML(product.name)}</h3><span>${formatPrice(product.price)}</span>
        <div class="quantity-control"><button data-action="quantity" data-id="${escapeHTML(product.id)}" data-change="-1" aria-label="Decrease quantity">−</button><span>${item.qty}</span><button data-action="quantity" data-id="${escapeHTML(product.id)}" data-change="1" aria-label="Increase quantity">+</button></div>
      </div><button class="remove-item" data-action="remove" data-id="${escapeHTML(product.id)}" aria-label="Remove ${escapeHTML(product.name)}">×</button></div>`;
  }).join("") : `<div class="empty-drawer"><b>♡</b>Your bag is waiting for something lovely.<br>Explore our handmade treasures and find your favourite.</div>`;
  const subtotal = subtotalValue();
  const delivery = deliveryValue();
  const discount = discountValue();
  $("#cartSubtotal").textContent = formatPrice(subtotal);
  $("#cartDiscount").textContent = `− ${formatPrice(discount)}`;
  $("#cartDelivery").textContent = delivery ? formatPrice(delivery) : "Free";
  $("#cartTotal").textContent = formatPrice(totalValue());
  $("#cartBottom").classList.toggle("hidden", cart.length === 0);
  $("#shippingMessage").textContent = subtotal >= 999 ? "Lovely! Your order ships for free." : subtotal ? `You're ${formatPrice(999 - subtotal)} away from free shipping.` : "Add something lovely to get started.";
  $("#shippingProgress").style.width = `${Math.min(100, subtotal / 999 * 100)}%`;
  $("#couponInput").value = coupon;
}

function renderWishlist() {
  renderCounts();
  const savedProducts = wishlist.map(productById).filter(Boolean);
  $("#wishlistItems").innerHTML = savedProducts.length ? savedProducts.map(product => `<div class="cart-line">
    <img src="${escapeHTML(imageUrl(product))}" alt=""><div class="cart-line-info"><h3>${escapeHTML(product.name)}</h3><span>${formatPrice(product.price)}</span>
    <div class="quantity-control"><button data-action="add" data-id="${escapeHTML(product.id)}">Add to bag</button></div></div>
    <button class="remove-item" data-action="wishlist" data-id="${escapeHTML(product.id)}" aria-label="Remove from wishlist">×</button></div>`).join("") : `<div class="empty-drawer"><b>♡</b>Your wishlist is a little empty.<br>Save the pieces you love and find them here.</div>`;
}

function persistCart() {
  saveStore(STORE.cart, cart);
  renderCart();
  renderProducts();
}

function addToCart(id, quantity = 1) {
  const product = productById(id);
  if (!product) return;
  if (product.stock < 1) return showToast("This handmade piece is temporarily unavailable.");
  const current = cart.find(item => item.id === id);
  if (current) current.qty = Math.min(product.stock, current.qty + quantity);
  else cart.push({ id, qty: Math.min(product.stock, quantity) });
  persistCart();
  showToast(`${product.name} added to your bag`);
}

function toggleWishlist(id) {
  wishlist = wishlist.includes(id) ? wishlist.filter(saved => saved !== id) : [...wishlist, id];
  saveStore(STORE.wishlist, wishlist);
  renderWishlist();
  renderProducts();
  showToast(wishlist.includes(id) ? "Saved to your wishlist" : "Removed from your wishlist");
}

function setCategory(category) {
  activeCategory = category;
  activeFilter = "all";
  $$(".filter-pill").forEach(button => button.classList.toggle("selected", button.dataset.filter === "all"));
  renderProducts();
  $("#shop").scrollIntoView({ behavior: "smooth" });
}

function setSearch(value, remember = false) {
  searchTerm = value.trim();
  $("#searchInput").value = value;
  $("#clearSearch").classList.toggle("visible", Boolean(value));
  $("#searchSuggestions").classList.remove("visible");
  if (remember && searchTerm) {
    recentSearches = [searchTerm, ...recentSearches.filter(term => term.toLowerCase() !== searchTerm.toLowerCase())].slice(0, 5);
    saveStore(STORE.searches, recentSearches);
  }
  renderProducts();
}

function openDrawer(id) {
  closeModals();
  $$(".side-drawer").forEach(drawer => drawer.classList.remove("open"));
  $(`#${id}`).classList.add("open");
  $(`#${id}`).setAttribute("aria-hidden", "false");
  $("#scrim").classList.add("visible");
  document.body.classList.add("no-scroll");
}

function closeDrawers() {
  $$(".side-drawer").forEach(drawer => {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
  });
  $("#scrim").classList.remove("visible");
  document.body.classList.remove("no-scroll");
}

function closeModals() {
  $("#modalLayer").classList.remove("visible");
  $("#modalLayer").setAttribute("aria-hidden", "true");
  $$(".modal").forEach(modal => { modal.classList.remove("active"); modal.innerHTML = ""; });
  document.body.classList.remove("no-scroll");
}

function showModal(id, content) {
  closeDrawers();
  const modal = $(`#${id}`);
  modal.innerHTML = content;
  $$(".modal").forEach(other => other.classList.remove("active"));
  modal.classList.add("active");
  $("#modalLayer").classList.add("visible");
  $("#modalLayer").setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function showProduct(id) {
  const product = productById(id);
  if (!product) return;
  const discount = Math.round((1 - product.price / product.original) * 100);
  showModal("productModal", `<button class="modal-close" data-action="close-modal" aria-label="Close">×</button>
    <div class="product-detail"><img class="detail-image" src="${escapeHTML(imageUrl(product))}" alt="${escapeHTML(product.name)}">
      <div class="detail-copy"><span class="eyebrow">${escapeHTML(product.category.toUpperCase())} · MADE BY HAND</span>
        <h2>${escapeHTML(product.name)}</h2><div class="detail-rating">★ ${Number(product.rating).toFixed(1)} <span>(${product.reviews} thoughtful reviews)</span></div>
        <div class="detail-price">${formatPrice(product.price)} <del>${formatPrice(product.original)}</del> <span class="product-category">${discount}% off</span></div>
        <p class="detail-description">${escapeHTML(product.description)} Every piece is made in small batches, so little variations make yours wonderfully unique.</p>
        <div class="detail-facts"><div><span>Made with</span><b>${escapeHTML(product.materials)}</b></div><div><span>Dimensions</span><b>${escapeHTML(product.dimensions)}</b></div><div><span>Availability</span><b>${product.stock ? `${product.stock} ready to ship` : "Temporarily unavailable"}</b></div></div>
        ${product.custom ? `<div class="custom-request"><label for="customNote">Add a personalisation request (optional)</label><input id="customNote" maxlength="80" placeholder="Name, colour, or a little note"></div>` : ""}
        <div class="detail-actions"><button class="button button-primary" data-action="detail-add" data-id="${escapeHTML(product.id)}" ${product.stock ? "" : "disabled"}>${product.stock ? "Add to bag" : "Unavailable"} <span>→</span></button><button class="button button-text" data-action="detail-buy" data-id="${escapeHTML(product.id)}" ${product.stock ? "" : "disabled"}>Buy now</button></div>
        <div class="custom-request"><label for="pinCheck">Delivery estimate · enter your PIN code</label><div style="display:flex;gap:7px"><input id="pinCheck" inputmode="numeric" maxlength="6" placeholder="6-digit PIN code"><button class="button button-text" data-action="pin-check">Check</button></div><span id="pinResult" class="product-category"></span></div>
      </div></div>`);
}

function showCheckout() {
  if (!cart.length) return showToast("Your bag is empty — find a treasure first.");
  closeDrawers();
  const accountName = demoAccount?.name || "";
  const accountEmail = demoAccount?.email || "";
  showModal("checkoutModal", `<button class="modal-close" data-action="close-modal" aria-label="Close">×</button>
    <span class="eyebrow">ALMOST YOURS</span><h2 class="modal-title">A few details, then it's on its way.</h2>
    <form id="checkoutForm">
      <div class="checkout-grid">
        <div class="form-field"><label for="fullName">Full name *</label><input id="fullName" name="name" required autocomplete="name" value="${escapeHTML(accountName)}"></div>
        <div class="form-field"><label for="mobile">Mobile number *</label><input id="mobile" name="mobile" required inputmode="numeric" pattern="[6-9][0-9]{9}" maxlength="10" placeholder="10-digit mobile number"></div>
        <div class="form-field full"><label for="email">Email address *</label><input id="email" name="email" type="email" required autocomplete="email" value="${escapeHTML(accountEmail)}"></div>
        <div class="form-field full"><label for="address">Delivery address *</label><input id="address" name="address" required autocomplete="street-address" placeholder="House number, street, area"></div>
        <div class="form-field"><label for="city">City *</label><input id="city" name="city" required autocomplete="address-level2"></div>
        <div class="form-field"><label for="state">State *</label><input id="state" name="state" required autocomplete="address-level1"></div>
        <div class="form-field"><label for="pincode">PIN code *</label><input id="pincode" name="pincode" required inputmode="numeric" pattern="[0-9]{6}" maxlength="6" placeholder="6 digits"></div>
      </div>
      <div class="checkout-summary"><div class="checkout-summary-line"><span>Subtotal · ${cart.reduce((sum, item) => sum + item.qty, 0)} items</span><b>${formatPrice(subtotalValue())}</b></div><div class="checkout-summary-line"><span>Discount${coupon ? ` · ${coupon}` : ""}</span><b>− ${formatPrice(discountValue())}</b></div><div class="checkout-summary-line"><span>Delivery</span><b>${deliveryValue() ? formatPrice(deliveryValue()) : "Free"}</b></div><div class="checkout-summary-line total"><span>To pay</span><b>${formatPrice(totalValue())}</b></div></div>
      <div class="payment-options"><p>Choose how you'd like to pay</p>
        <label class="payment-choice"><input type="radio" name="payment" value="cod" checked> Cash on Delivery</label>
        <label class="payment-choice"><input type="radio" name="payment" value="upi"> UPI</label>
        <label class="payment-choice"><input type="radio" name="payment" value="card"> Credit / Debit Card</label>
        <label class="payment-choice"><input type="radio" name="payment" value="netbanking"> Net Banking</label>
      </div>
      <p class="demo-warning">Demo checkout: no payment gateway is connected. Online payments cannot be completed here. Choose Cash on Delivery to place a demo order; no real charge will be made.</p>
      <p id="checkoutError" class="coupon-message error"></p>
      <button class="button button-primary checkout-submit" type="submit">Place demo order · ${formatPrice(totalValue())} <span>→</span></button>
    </form>`);
}

function openAccount() {
  if (demoAccount) {
    showModal("accountModal", `<button class="modal-close" data-action="close-modal" aria-label="Close">×</button><span class="eyebrow">YOUR MAYON ACCOUNT</span><h2 class="modal-title">Hello, ${escapeHTML(demoAccount.name)}.</h2><p class="detail-description">${escapeHTML(demoAccount.email)}</p><button class="button button-primary" data-action="orders">Your orders <span>→</span></button><button class="button button-text" data-action="signout">Sign out</button><p class="account-disclaimer">This is a local demo profile saved only in this browser. It is not secure authentication.</p>`);
    return;
  }
  showModal("accountModal", `<button class="modal-close" data-action="close-modal" aria-label="Close">×</button><span class="eyebrow">A LITTLE MORE PERSONAL</span><h2 class="modal-title">Welcome to our little corner.</h2>
    <div class="account-tabs"><button class="account-tab selected" data-action="account-tab" data-tab="signin">Sign in</button><button class="account-tab" data-action="account-tab" data-tab="signup">Create an account</button></div>
    <form id="accountForm"><div class="checkout-grid"><div class="form-field full" id="accountNameField" hidden><label for="accountName">Your name *</label><input id="accountName" name="name" autocomplete="name"></div>
      <div class="form-field full"><label for="accountEmail">Email address *</label><input id="accountEmail" name="email" type="email" required autocomplete="email" placeholder="you@example.com"></div></div>
      <p class="demo-warning">Demo profile only: this browser-only experience does not use secure authentication or store passwords.</p>
      <p class="account-message" id="accountMessage"></p><button class="button button-primary checkout-submit" type="submit">Continue in demo <span>→</span></button></form>
      <p class="account-disclaimer">Password reset and verified sign-in need a secure authentication service such as Supabase, which is not configured in this static demo.</p>`);
}

function openOrder(order) {
  const steps = ["Order Placed", "Order Confirmed", "Craft Preparation", "Quality Check", "Shipped", "Out for Delivery", "Delivered"];
  const progress = order.statusIndex || 0;
  showModal("orderModal", `<button class="modal-close" data-action="close-modal" aria-label="Close">×</button><span class="eyebrow">THANK YOU FOR CHOOSING HANDMADE</span><h2 class="modal-title">Your little treasure is on its way.</h2><div class="order-number">${escapeHTML(order.id)} · ${escapeHTML(order.createdAt)}</div>
    <div class="checkout-summary">${order.items.map(item => `<div class="checkout-summary-line"><span>${escapeHTML(item.name)} × ${item.qty}</span><b>${formatPrice(item.price * item.qty)}</b></div>`).join("")}<div class="checkout-summary-line total"><span>Order total</span><b>${formatPrice(order.total)}</b></div><div class="checkout-summary-line"><span>Payment</span><b>${order.payment === "cod" ? "Cash on Delivery" : "Payment pending"}</b></div></div>
    <div class="tracking-list">${steps.map((step, index) => `<div class="tracking-step ${index < progress ? "done" : ""} ${index === progress ? "active" : ""}"><span class="tracking-dot">${index < progress ? "✓" : index + 1}</span><b>${step}${index === 0 ? ` · ${escapeHTML(order.createdAt)}` : ""}</b></div>`).join("")}</div>
    <p class="demo-warning">Demo tracking: order progress is illustrative and will not update without a connected fulfilment service.</p>`);
}

function applyCouponCode(value) {
  const code = value.trim().toUpperCase();
  const message = $("#couponMessage");
  if (code === "MAYON10") {
    coupon = code;
    message.textContent = "Lovely! 10% has been taken off your order.";
  } else if (code === "CRAFT15" && subtotalValue() >= 999) {
    coupon = code;
    message.textContent = "A little treat! 15% has been taken off your order.";
  } else {
    coupon = "";
    message.textContent = code === "CRAFT15" ? "CRAFT15 is for orders of ₹999 or more." : "That code doesn't look right. Try MAYON10 or CRAFT15.";
    message.classList.add("error");
    saveStore(STORE.coupon, coupon);
    renderCart();
    return;
  }
  message.classList.remove("error");
  saveStore(STORE.coupon, coupon);
  renderCart();
}

function updateAdmin() {
  const revenue = orders.reduce((sum, order) => sum + order.total, 0);
  const rows = products.map(product => `<div class="admin-product-row"><span>${escapeHTML(product.name)}</span><span>${formatPrice(product.price)} · ${product.stock} left</span><button data-action="admin-edit" data-id="${escapeHTML(product.id)}">Edit</button><button data-action="admin-delete" data-id="${escapeHTML(product.id)}">Delete</button></div>`).join("");
  showModal("adminModal", `<button class="modal-close" data-action="close-modal" aria-label="Close">×</button><span class="eyebrow">LOCAL STUDIO PREVIEW</span><h2 class="modal-title">A tiny maker's dashboard.</h2>
    <div class="checkout-summary"><div class="checkout-summary-line"><span>Products</span><b>${products.length}</b></div><div class="checkout-summary-line"><span>Demo orders</span><b>${orders.length}</b></div><div class="checkout-summary-line"><span>Demo order value</span><b>${formatPrice(revenue)}</b></div></div>
    <p class="demo-warning">This is an unrestricted local-only preview, not a secure admin panel. Product changes are saved in this browser only. Never use it to manage real orders or customer data.</p>
    <h3 style="font:600 16px var(--serif)">Add a product</h3><form id="adminForm" class="admin-form">
      <div class="form-field"><label for="adminName">Product name</label><input id="adminName" required maxlength="60"></div>
      <div class="form-field"><label for="adminCategory">Category</label><select id="adminCategory">${categories.map(item => `<option>${escapeHTML(item.name)}</option>`).join("")}</select></div>
      <div class="form-field"><label for="adminPrice">Price (₹)</label><input id="adminPrice" type="number" min="1" max="100000" required></div>
      <div class="form-field"><label for="adminOriginal">Original price (₹)</label><input id="adminOriginal" type="number" min="1" max="100000" required></div>
      <div class="form-field"><label for="adminImage">Image ID (optional)</label><input id="adminImage" placeholder="photo-..."></div>
      <button class="button button-primary" type="submit">Add handmade product <span>+</span></button></form>
    <div class="admin-products">${rows}</div><button class="button button-text" data-action="admin-orders">View recent orders <span>→</span></button>`);
}

function openSuggestions() {
  const value = $("#searchInput").value.trim().toLowerCase();
  const matches = value ? products.filter(product => `${product.name} ${product.category}`.toLowerCase().includes(value)).slice(0, 4) : recentSearches.slice(0, 4).map(term => ({ id: "", name: term, price: null }));
  const suggestions = $("#searchSuggestions");
  if (!value && !matches.length) return suggestions.classList.remove("visible");
  suggestions.innerHTML = matches.length ? matches.map(item => item.id
    ? `<button class="suggestion-item" data-action="suggest-product" data-id="${escapeHTML(item.id)}"><img src="${escapeHTML(imageUrl(item))}" alt=""><span>${escapeHTML(item.name)}</span><small>${formatPrice(item.price)}</small></button>`
    : `<button class="suggestion-item" data-action="suggest-search" data-query="${escapeHTML(item.name)}"><span>↻ &nbsp;${escapeHTML(item.name)}</span></button>`).join("")
    : `<div class="suggestion-item"><span>No matching treasures just yet.</span></div>`;
  suggestions.classList.add("visible");
}

renderCategories();
renderProducts();
renderCart();
renderWishlist();
$("#year").textContent = new Date().getFullYear();

$("#categoryGrid").addEventListener("click", event => {
  const card = event.target.closest("[data-category]");
  if (card) setCategory(card.dataset.category);
});
$("#categoryFilters").addEventListener("change", event => {
  if (!event.target.matches(".category-checkbox")) return;
  activeCategory = event.target.checked ? event.target.value : "all";
  renderProducts();
});
$("#filterPills").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  activeCategory = "all";
  $$(".filter-pill").forEach(item => item.classList.toggle("selected", item === button));
  renderProducts();
});
$("#productGrid").addEventListener("click", event => {
  const action = event.target.closest("[data-action]");
  if (action) {
    if (action.dataset.action === "add") addToCart(action.dataset.id);
    if (action.dataset.action === "wishlist") toggleWishlist(action.dataset.id);
    event.stopPropagation();
    return;
  }
  const card = event.target.closest("[data-product]");
  if (card) showProduct(card.dataset.product);
});
$("#cartItems").addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const item = cart.find(entry => entry.id === button.dataset.id);
  if (!item) return;
  if (button.dataset.action === "quantity") {
    const product = productById(item.id);
    item.qty = Math.max(0, Math.min(product.stock, item.qty + Number(button.dataset.change)));
    if (!item.qty) cart = cart.filter(entry => entry.id !== item.id);
    persistCart();
  }
  if (button.dataset.action === "remove") {
    cart = cart.filter(entry => entry.id !== item.id);
    persistCart();
  }
});
$("#wishlistItems").addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  if (button.dataset.action === "add") addToCart(button.dataset.id);
  if (button.dataset.action === "wishlist") toggleWishlist(button.dataset.id);
});
$("#wishlistOpen").addEventListener("click", () => { renderWishlist(); openDrawer("wishlistDrawer"); });
$("#cartOpen").addEventListener("click", () => { renderCart(); openDrawer("cartDrawer"); });
$("#scrim").addEventListener("click", closeDrawers);
$$("[data-close]").forEach(button => button.addEventListener("click", closeDrawers));
$("#checkoutOpen").addEventListener("click", showCheckout);
$("#applyCoupon").addEventListener("click", () => applyCouponCode($("#couponInput").value));
$("#couponInput").addEventListener("keydown", event => { if (event.key === "Enter") { event.preventDefault(); applyCouponCode($("#couponInput").value); } });

$("#searchInput").addEventListener("input", () => {
  $("#clearSearch").classList.toggle("visible", Boolean($("#searchInput").value));
  openSuggestions();
});
$("#searchInput").addEventListener("focus", openSuggestions);
$("#searchInput").addEventListener("keydown", event => { if (event.key === "Enter") { event.preventDefault(); setSearch($("#searchInput").value, true); $("#shop").scrollIntoView({ behavior: "smooth" }); } });
$("#searchButton").addEventListener("click", () => { setSearch($("#searchInput").value, true); $("#shop").scrollIntoView({ behavior: "smooth" }); });
$("#clearSearch").addEventListener("click", () => setSearch(""));
$("#searchFocus").addEventListener("click", () => { $("#searchInput").focus(); window.scrollTo({ top: $("#searchInput").getBoundingClientRect().top + window.scrollY - 180, behavior: "smooth" }); });
$(".popular-searches").addEventListener("click", event => {
  const button = event.target.closest("[data-query]");
  if (button) { setSearch(button.dataset.query, true); $("#shop").scrollIntoView({ behavior: "smooth" }); }
});
$("#searchSuggestions").addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  if (button.dataset.action === "suggest-product") showProduct(button.dataset.id);
  else setSearch(button.dataset.query, true);
});

$("#priceRange").addEventListener("input", event => { maxPrice = Number(event.target.value); renderProducts(); });
$("#ratingFilter").addEventListener("change", event => { minRating = event.target.checked; renderProducts(); });
$("#stockFilter").addEventListener("change", event => { stockOnly = event.target.checked; renderProducts(); });
$("#sortSelect").addEventListener("change", renderProducts);
$("#resetFilters").addEventListener("click", resetFilters);
$("#emptyReset").addEventListener("click", resetFilters);
function resetFilters() {
  activeCategory = "all";
  activeFilter = "all";
  searchTerm = "";
  maxPrice = 1500;
  minRating = false;
  stockOnly = false;
  $("#searchInput").value = "";
  $("#priceRange").value = "1500";
  $("#ratingFilter").checked = false;
  $("#stockFilter").checked = false;
  $("#sortSelect").value = "popular";
  $("#clearSearch").classList.remove("visible");
  $$(".filter-pill").forEach(button => button.classList.toggle("selected", button.dataset.filter === "all"));
  renderProducts();
}
$("#gridView").addEventListener("click", () => { listView = false; $("#gridView").classList.add("selected"); $("#listView").classList.remove("selected"); renderProducts(); });
$("#listView").addEventListener("click", () => { listView = true; $("#listView").classList.add("selected"); $("#gridView").classList.remove("selected"); renderProducts(); });
$$(".hero-buttons [data-filter]").forEach(button => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  $$(".filter-pill").forEach(item => item.classList.toggle("selected", item.dataset.filter === activeFilter));
  renderProducts();
}));

document.addEventListener("click", async event => {
  const copy = event.target.closest("[data-code]");
  if (copy) {
    try { await navigator.clipboard.writeText(copy.dataset.code); showToast(`${copy.dataset.code} copied — apply it in your bag.`); }
    catch { showToast(`Your code is ${copy.dataset.code} — apply it in your bag.`); }
  }
});

$("#modalLayer").addEventListener("click", event => {
  if (event.target === $("#modalLayer")) return closeModals();
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const { action, id } = button.dataset;
  if (action === "close-modal") closeModals();
  if (action === "detail-add") { addToCart(id); closeModals(); }
  if (action === "detail-buy") { addToCart(id); showCheckout(); }
  if (action === "pin-check") {
    const pin = $("#pinCheck").value.trim();
    $("#pinResult").textContent = /^\d{6}$/.test(pin) ? "Estimated delivery in 4–7 days, depending on your location." : "Please enter a valid 6-digit PIN code.";
  }
  if (action === "account-tab") {
    $$(".account-tab").forEach(tab => tab.classList.toggle("selected", tab === button));
    const isSignup = button.dataset.tab === "signup";
    $("#accountNameField").hidden = !isSignup;
    $("#accountName").required = isSignup;
    $("#accountMessage").textContent = "";
  }
  if (action === "signout") {
    demoAccount = null;
    saveStore(STORE.account, null);
    renderCounts();
    closeModals();
    showToast("You've signed out of this demo profile.");
  }
  if (action === "orders") {
    if (orders.length) openOrder(orders[orders.length - 1]);
    else showToast("Your order history is empty for now.");
  }
  if (action === "admin-edit") {
    const product = productById(id);
    const price = window.prompt(`New price for ${product.name} (₹):`, product.price);
    if (price === null) return;
    const numericPrice = Number(price);
    if (!Number.isFinite(numericPrice) || numericPrice <= 0) return showToast("Please enter a valid price.");
    product.price = numericPrice;
    saveStore(STORE.products, products);
    updateAdmin();
    renderProducts();
    renderCart();
    showToast("Product price updated in this browser.");
  }
  if (action === "admin-delete") {
    if (!window.confirm("Remove this product from the local demo catalogue?")) return;
    products = products.filter(product => product.id !== id);
    cart = cart.filter(item => item.id !== id);
    wishlist = wishlist.filter(item => item !== id);
    saveStore(STORE.products, products);
    saveStore(STORE.cart, cart);
    saveStore(STORE.wishlist, wishlist);
    updateAdmin();
    renderProducts();
    renderCart();
    renderWishlist();
    showToast("Product removed from the local demo.");
  }
  if (action === "admin-orders") {
    closeModals();
    showToast(orders.length ? `There are ${orders.length} demo order(s) in this browser.` : "There are no demo orders yet.");
  }
});

$("#modalLayer").addEventListener("submit", event => {
  event.preventDefault();
  if (event.target.id === "checkoutForm") {
    const form = event.target;
    const payment = new FormData(form).get("payment");
    if (payment !== "cod") {
      $("#checkoutError").textContent = "Online payment is not available in this demo. No payment has been taken. Choose Cash on Delivery or come back after payment integration is configured.";
      return;
    }
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const order = {
      id: `MF${Date.now().toString().slice(-8)}`,
      createdAt: new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(new Date()),
      items: cart.map(item => ({ name: productById(item.id)?.name || "Handmade treasure", qty: item.qty, price: productById(item.id)?.price || 0 })),
      subtotal: subtotalValue(),
      discount: discountValue(),
      delivery: deliveryValue(),
      total: totalValue(),
      payment: "cod",
      statusIndex: 0,
      customer: { name: values.get("name"), email: values.get("email"), mobile: values.get("mobile"), address: values.get("address"), city: values.get("city"), state: values.get("state"), pincode: values.get("pincode") }
    };
    orders.push(order);
    saveStore(STORE.orders, orders);
    cart = [];
    coupon = "";
    saveStore(STORE.cart, cart);
    saveStore(STORE.coupon, coupon);
    closeModals();
    renderCart();
    renderProducts();
    openOrder(order);
  }
  if (event.target.id === "accountForm") {
    const form = event.target;
    if (!form.reportValidity()) return;
    const name = $("#accountNameField").hidden ? "Handmade friend" : $("#accountName").value.trim();
    demoAccount = { name: name || "Handmade friend", email: $("#accountEmail").value.trim() };
    saveStore(STORE.account, demoAccount);
    renderCounts();
    closeModals();
    showToast(`Welcome, ${demoAccount.name.split(" ")[0]}! This demo profile is saved locally.`);
  }
  if (event.target.id === "adminForm") {
    const name = $("#adminName").value.trim();
    const price = Number($("#adminPrice").value);
    const original = Number($("#adminOriginal").value);
    const image = $("#adminImage").value.trim() || "photo-1493106641515-6b5631de4bb9";
    if (original < price) return showToast("Original price should be at least the current price.");
    const slug = `${Date.now()}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    products.unshift({ id: slug, name, category: $("#adminCategory").value, price, original, rating: 5, reviews: 0, image, imageUrl: `https://images.unsplash.com/${image}?auto=format&fit=crop&w=700&q=80`, description: "A new handmade treasure, thoughtfully added to our local demo catalogue.", materials: "Thoughtfully selected materials", dimensions: "Handmade with care", stock: 10, bestseller: false, newest: true });
    saveStore(STORE.products, products);
    updateAdmin();
    renderProducts();
    showToast("Your handmade product was added to the local catalogue.");
  }
});

$("#accountOpen").addEventListener("click", openAccount);
$("#adminOpen").addEventListener("click", updateAdmin);
$("#mobileMenu").addEventListener("click", () => $("#mainNav").classList.toggle("open"));
$("#mainNav").addEventListener("click", event => {
  if (event.target.closest("a")) $("#mainNav").classList.remove("open");
});
$("#newsletterForm").addEventListener("submit", event => {
  event.preventDefault();
  const email = $("#newsletterEmail").value.trim();
  showToast(`Thanks for stopping by, ${email}! The newsletter isn't connected in this demo.`);
  event.target.reset();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") { closeDrawers(); closeModals(); $("#mainNav").classList.remove("open"); }
});
