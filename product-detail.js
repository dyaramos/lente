/* ==================================================
   PRODUCT DETAIL — DYNAMIC LOADER
   Reads URL param ?id=... at naglo-load ng product data
================================================== */

let UNIT_PRICE = 0;
let CURRENT_PRODUCT = null;

/* ===== Parse URL parameter ===== */
function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

/* ===== Load product data ===== */
function loadProduct() {
    const id = getProductId();

    // Fallback sa Canon EOS R50 kung walang id
    const product = PRODUCTS[id] || PRODUCTS['canon-eos-r50'];

    if (!product) {
        document.querySelector('main').innerHTML = `
            <section style="text-align:center; padding: 100px 20px;">
                <h1>Product Not Found</h1>
                <p>Sorry, we couldn't find that product.</p>
                <a href="shop.html" style="color:#7d4dd6; font-weight:800;">← Back to Shop</a>
            </section>
        `;
        return;
    }

    CURRENT_PRODUCT = product;
    UNIT_PRICE = product.price;

    /* Update title */
    document.title = product.name + ' — Lente';

    /* Update breadcrumb */
    const breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb) {
        breadcrumb.innerHTML = `
            <span><a href="index.html">Home</a> / <a href="shop.html">Shop</a> / <a href="${product.brand.toLowerCase()}.html">${product.brand}</a> / <span class="current">${product.name}</span></span>
            <a href="#bottom">Jump to reviews ↓</a>
        `;
    }

    /* Update main image */
    const mainImg = document.getElementById('mainProductImage');
    mainImg.src = product.image;
    mainImg.alt = product.name;

    /* Update caption */
    document.getElementById('mainCaption').textContent =
        product.name + ' — ' + product.category + '. Hover the highlighted areas to explore.';

    /* Update name */
    document.getElementById('productName').innerHTML =
        product.name + '<em>' + product.category + ' — ' + product.brand + '</em>';

    /* Update rating */
    document.getElementById('productRating').textContent =
        product.rating + ' (' + product.reviews + ' Reviews)';

    /* Update price */
    const priceBlock = document.getElementById('priceBlock');
    let priceHTML = '';
    if (product.oldPrice) {
        priceHTML += `<del>₱${product.oldPrice.toLocaleString('en-PH')}</del> `;
    }
    priceHTML += `<ins>₱${product.price.toLocaleString('en-PH')}</ins>`;
    if (product.discount) {
        priceHTML += ` <span class="badge">${product.discount}</span>`;
    }
    priceBlock.innerHTML = priceHTML;

    /* Update description */
    document.getElementById('productDesc').textContent = product.desc;

    /* Update thumbnails */
    const thumbRow = document.getElementById('thumbnailRow');
    thumbRow.innerHTML = product.gallery.map((img, i) => `
        <div class="thumbnail">
            <img src="${img}" alt="View ${i+1}" onclick="document.getElementById('mainProductImage').src=this.src">
            <div class="dropdown"><span class="label">View ${i+1}</span></div>
        </div>
    `).join('');

    /* Update quick specs */
    const quickSpecsContent = document.getElementById('quickSpecsContent');
    quickSpecsContent.textContent = Object.entries(product.specs)
        .map(([key, val]) => `${key.padEnd(14)}: ${val}`)
        .join('\n');

    /* Update full specs table */
    const specsBody = document.getElementById('specsTableBody');
    specsBody.innerHTML = Object.entries(product.specs)
        .map(([key, val]) => `<tr><td>${key}</td><td>${val}</td></tr>`)
        .join('');

    /* Init quantity calculation */
    multiplication();
}

/* ===== Quantity × Price ===== */
function multiplication() {
    const qty = parseInt(document.getElementById('qtyInput').value, 10) || 1;
    const total = qty * UNIT_PRICE;
    document.getElementById('totalPrice').textContent = total.toLocaleString('en-PH');
}

/* ===== Toggle quick specs ===== */
function toggle(id) {
    const el = document.getElementById(id);
    el.hidden = !el.hidden;
}

/* ===== Star rating ===== */
const starInputs = document.querySelectorAll('#starRating input');
const starFeedback = document.getElementById('starFeedback');
const ratingLabels = { '5': 'Excellent', '4': 'Very Good', '3': 'Good', '2': 'Fair', '1': 'Poor' };

starInputs.forEach(input => {
    input.addEventListener('change', () => {
        starFeedback.textContent = ratingLabels[input.value] || '';
    });
});

/* ===== Submit review ===== */
function submitReview(event) {
    event.preventDefault();
    const rating = document.querySelector('input[name="rating"]:checked');
    const text = document.getElementById('reviewText').value.trim();
    const textErr = document.getElementById('reviewTextError');

    if (!rating) {
        starFeedback.textContent = 'Please select a rating.';
        starFeedback.style.color = '#d94a4a';
        return false;
    }
    if (text.length < 5) {
        textErr.textContent = 'Please write at least a few words.';
        return false;
    }
    textErr.textContent = '';
    alert(`Thanks for your review! (${rating.value} stars)`);
    return false;
}

/* ===== Recently viewed ===== */
const recentlyViewedStack = [];

function pushRecentlyViewed(name) {
    if (!recentlyViewedStack.includes(name)) {
        recentlyViewedStack.push(name);
        renderRecentlyViewed();
    }
}

function renderRecentlyViewed() {
    const container = document.getElementById('recentlyViewedList');
    if (!container) return;
    container.innerHTML = '';
    for (let i = recentlyViewedStack.length - 1; i >= 0; i--) {
        const chip = document.createElement('span');
        chip.className = 'recent-chip';
        chip.textContent = recentlyViewedStack[i];
        container.appendChild(chip);
    }
}

/* ===== SEARCH OVERLAY ===== */
const searchDatabase = [
    { name: 'Canon EOS R50', category: 'Mirrorless', price: '₱38,998', image: 'images/products/canon-eos-r50.png', url: 'product_detail.html?id=canon-eos-r50' },
    { name: 'Canon EOS R10', category: 'Mirrorless', price: '₱46,999', image: 'images/products/canon-eos-r10.png', url: 'product_detail.html?id=canon-eos-r10' },
    { name: 'Canon EOS R8', category: 'Mirrorless', price: '₱89,999', image: 'images/products/canon-eos-r8.png', url: 'product_detail.html?id=canon-eos-r8' },
    { name: 'Sony ZV-E10 II', category: 'Vlog', price: '₱54,999', image: 'images/products/sony-zv-e10-ii.png', url: 'product_detail.html?id=sony-zv-e10-ii' },
    { name: 'Sony Alpha 6700', category: 'Mirrorless', price: '₱79,999', image: 'images/products/sony-alpha-6700.png', url: 'product_detail.html?id=sony-alpha-6700' },
    { name: 'Nikon Z50', category: 'Mirrorless', price: '₱49,999', image: 'images/products/nikon-z50.png', url: 'product_detail.html?id=nikon-z50' },
    { name: 'Fujifilm X100VI', category: 'Digicam', price: '₱89,999', image: 'images/products/fujifilm-x100vi.png', url: 'product_detail.html?id=fujifilm-x100vi' },
    { name: 'KODAK PIXPRO FZ55', category: 'Digicam', price: '₱12,999', image: 'images/products/kodak-pixpro-fz55.png', url: 'product_detail.html?id=kodak-pixpro-fz55' },
    { name: 'GoPro HERO13 Black', category: 'Action', price: '₱22,999', image: 'images/products/gopro-hero13-black.png', url: 'product_detail.html?id=gopro-hero13-black' },
    { name: 'DJI Osmo Action', category: 'Action', price: '₱19,999', image: 'images/products/dji-osmo-action.png', url: 'product_detail.html?id=dji-osmo-action' },
    { name: 'Samsung NX30', category: 'Mirrorless', price: '₱34,999', image: 'images/products/samsung-nx30.png', url: 'product_detail.html?id=samsung-nx30' }
];

const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchBody = document.getElementById('searchBody');

function openSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.add('active');
    setTimeout(() => searchInput.focus(), 100);
}

function closeSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    resetSearchBody();
}

function resetSearchBody() {
    if (!searchBody) return;
    searchBody.innerHTML = `
        <div class="search-quick">
            <span>Popular Searches</span>
            <a href="shop.html#mirrorless">Mirrorless</a>
            <a href="shop.html#dslr">DSLR</a>
            <a href="shop.html#action">Action Cameras</a>
            <a href="canon.html">Canon</a>
            <a href="sony.html">Sony</a>
            <a href="nikon.html">Nikon</a>
            <a href="fujifilm.html">Fujifilm</a>
            <a href="shop.html#accessories">Accessories</a>
        </div>
    `;
}

function runSearch(query) {
    query = query.toLowerCase().trim();
    if (!query) { resetSearchBody(); return; }
    const results = searchDatabase.filter(p =>
        p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
    );
    if (results.length === 0) {
        searchBody.innerHTML = `<p class="search-empty">No products found for "<strong>${query}</strong>"</p>`;
        return;
    }
    searchBody.innerHTML = `
        <div class="search-section-label">${results.length} Result${results.length > 1 ? 's' : ''}</div>
        ${results.map(p => `
            <a href="${p.url}" class="search-result">
                <div class="search-result-img"><img src="${p.image}" alt="${p.name}"></div>
                <div class="search-result-info">
                    <h4>${p.name}</h4>
                    <p>${p.category}</p>
                </div>
                <div class="search-result-price">${p.price}</div>
            </a>
        `).join('')}
    `;
}

if (searchInput) searchInput.addEventListener('input', (e) => runSearch(e.target.value));
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('active')) closeSearch();
});
if (searchOverlay) searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearch();
});

/* ===== INIT ===== */
window.addEventListener('DOMContentLoaded', () => {
    loadProduct();
    lucide.createIcons();
});