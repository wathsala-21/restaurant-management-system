// script.js

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuOverlay.classList.add('active');
    });
}

if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('active');
    });
}

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('active');
    });
});

// Intersection Observer for Scroll Animations
const fadeUpElements = document.querySelectorAll('.fade-up');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeUpElements.forEach(el => observer.observe(el));

// Testimonial Slider
const sliderContainer = document.getElementById('sliderContainer');
const slides = document.querySelectorAll('.slide');
const sliderDotsContainer = document.getElementById('sliderDots');

let currentSlide = 0;
const slideCount = slides.length;

if (sliderContainer && sliderDotsContainer && slideCount > 0) {
    // Create dots
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.dataset.index = i;
        dot.addEventListener('click', () => goToSlide(i));
        sliderDotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    function goToSlide(index) {
        currentSlide = index;
        const offset = -currentSlide * 100;
        sliderContainer.style.transform = `translateX(${offset}%)`;
        
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }

    // Auto slide
    setInterval(() => {
        let nextSlide = (currentSlide + 1) % slideCount;
        goToSlide(nextSlide);
    }, 5000);
}

// Comprehensive Product Data in Sri Lankan Rupees (LKR)
const productsData = {
    1: {
        title: "Chicken Lamprais",
        price: 1200.00,
        img: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800&q=80",
        desc: "Traditional rice cooked in meat stock, accompanied by chicken curry, frikkadels (meatballs), blachan, and aubergine pahi, slow-baked in a banana leaf.",
        category: "srilankan",
        isPopular: true
    },
    2: {
        title: "Ceylon Mud Crab Curry",
        price: 9500.00,
        img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
        desc: "Wild fresh mud crab simmered in a dense, richly spiced, toasted local curry blend and creamy coconut extract.",
        category: "srilankan",
        isPopular: false
    },
    3: {
        title: "Chicken Roll",
        price: 210.00,
        img: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=800&q=80",
        desc: "Classic Sri Lankan style roll. Crispy breaded pastry stuffed with savory spiced chicken and potato filling.",
        category: "savouries",
        isPopular: true
    },
    4: {
        title: "Coriander & Fish Pastry",
        price: 210.00,
        img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&q=80",
        desc: "Buttery, flaky golden puff pastry puff filled with seasoned minced fish and garden fresh coriander leaves.",
        category: "savouries",
        isPopular: false
    },
    5: {
        title: "Crispy Chicken Quiche",
        price: 200.00,
        img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80",
        desc: "Baked open-face pastry crust filled with savory custard, minced chicken breast, herbs, and melted gouda cheese.",
        category: "savouries",
        isPopular: false
    },
    6: {
        title: "Chocolate Fudge Cake",
        price: 2100.00,
        img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
        desc: "Rich, moist dark chocolate cake layered with luscious fudge frosting. Superb texture and rich flavor.",
        category: "cakes",
        isPopular: true,
        sizes: {
            "500g": 2100.00,
            "1kg": 4100.00,
            "2kg": 8050.00
        }
    },
    7: {
        title: "Coffee & Chocolate Fudge Cake",
        price: 2250.00,
        img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&q=80",
        desc: "A rich layers of chocolate fudge paired with aromatic Ceylon coffee-infused sponge cake.",
        category: "cakes",
        isPopular: false,
        sizes: {
            "500g": 2250.00,
            "1kg": 4350.00,
            "2kg": 8500.00
        }
    },
    8: {
        title: "Love Cake",
        price: 2050.00,
        img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
        desc: "Traditional Sri Lankan festive cake made with semolina, honey, cashews, pumpkin preserve, and spiced with nutmeg and cardamom. (400g)",
        category: "cakes",
        isPopular: true
    },
    9: {
        title: "Butter Cake",
        price: 1350.00,
        img: "https://images.unsplash.com/photo-1518047601542-79f18c655718?w=800&q=80",
        desc: "Classic Sri Lankan style buttery vanilla pound cake. Simple, moist, and delicious.",
        category: "cakes",
        isPopular: false,
        sizes: {
            "500g": 1350.00,
            "1kg": 2600.00
        }
    },
    10: {
        title: "Traditional Hopper Feast",
        price: 1500.00,
        img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=800&q=80",
        desc: "Light, crispy-edged rice crepes baked with free-range eggs. Served with Seeni Sambol and Lunu Miris.",
        category: "srilankan",
        isPopular: false
    },
    11: {
        title: "Gourmet Kottu Supreme",
        price: 1800.00,
        img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80",
        desc: "Elevated shredded flatbread wok-tossed with farm eggs, fresh vegetables, chicken curry, and fresh herbs.",
        category: "srilankan",
        isPopular: true
    },
    12: {
        title: "Berkshire Black Pork Curry",
        price: 2200.00,
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        desc: "Tender pork belly cubes simmered in heavy-roasted spices, local organic coconut vinegar, and curry leaf broth.",
        category: "srilankan",
        isPopular: false
    },
    13: {
        title: "Modern Ceylon Watalappan",
        price: 850.00,
        img: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=800&q=80",
        desc: "Rich, spiced coconut custard made with organic palm jaggery, nutmeg, and cardamom, topped with cashews.",
        category: "dessert",
        isPopular: true
    },
    14: {
        title: "Golden Saffron Mousse",
        price: 950.00,
        img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
        desc: "Light saffron mousse topped with rosewater droplets, micro greens, and premium crushed pistachios.",
        category: "dessert",
        isPopular: false
    },
    15: {
        title: "Gold Leaf Chocolate Fondant",
        price: 1200.00,
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
        desc: "Melting liquid center chocolate cake using 70% dark cocoa, decorated with edible gold leaf and vanilla gelato.",
        category: "dessert",
        isPopular: false
    },
    16: {
        title: "Jaffna Spiced Prawn Thermidor",
        price: 3500.00,
        img: "https://images.unsplash.com/photo-1559737712-4217316a7f0f?w=800&q=80",
        desc: "Jumbo ocean prawns baked in-shell, filled with a creamy mix of Jaffna curry spices, coconut arrack, and gruyère cheese.",
        category: "srilankan",
        isPopular: false
    }
};

// Application State
let cart = [];
let diningPreference = "dinein"; 
let searchQuery = "";
let activeCategory = "all";
let currentUser = null;

// Load user session from localStorage
try {
    const cachedUser = localStorage.getItem('zentro_logged_in_user');
    if (cachedUser) {
        currentUser = JSON.parse(cachedUser);
    }
} catch (e) {
    console.error("Error reading login state from localStorage", e);
}

// DOM Elements
const productGridContainer = document.getElementById('productGridContainer');
const searchPanel = document.getElementById('searchPanel');
const searchInput = document.getElementById('searchInput');
const openSearchBtn = document.getElementById('openSearchBtn');
const closeSearchBtn = document.getElementById('closeSearchBtn');

const authModal = document.getElementById('authModal');
const openAuthBtn = document.getElementById('openAuthBtn');
const closeAuthModal = document.getElementById('closeAuthModal');
const tabLogin = document.getElementById('tabLogin');
const tabRegister = document.getElementById('tabRegister');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');

const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartCountElement = document.querySelector('.cart-count');
const toast = document.getElementById('toast');
const dineinBtn = document.getElementById('dineinBtn');
const takeawayBtn = document.getElementById('takeawayBtn');

const modalOverlay = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');
const modalTotal = document.getElementById('modalTotal');
const addonSelect = document.getElementById('addonSelect');
const qtyInput = document.getElementById('qtyInput');
const modalSizeGroup = document.getElementById('modalSizeGroup');
const sizeSelectorGroup = document.getElementById('sizeSelectorGroup');

let currentProductPrice = 0;
let currentProductId = null;
let currentProductSize = null;

// Helper to Format Currency (Rs. X,XXX.XX)
function formatPrice(num) {
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Render Products Grid
function renderProducts() {
    if (!productGridContainer) return;
    
    productGridContainer.innerHTML = '';
    
    const filtered = Object.entries(productsData).filter(([id, product]) => {
        const matchesCategory = activeCategory === 'all' || 
            (activeCategory === 'popular' && product.isPopular) || 
            (product.category === activeCategory);
            
        const matchesSearch = searchQuery === '' || 
            product.title.toLowerCase().includes(searchQuery) || 
            product.desc.toLowerCase().includes(searchQuery);
            
        return matchesCategory && matchesSearch;
    });
    
    if (filtered.length === 0) {
        productGridContainer.innerHTML = `
            <div class="search-empty-state">
                <i class="fas fa-search-minus"></i>
                <h3>No items found</h3>
                <p>We couldn't find anything matching "${searchQuery}". Try searching for something else.</p>
            </div>
        `;
        return;
    }
    
    filtered.forEach(([id, product]) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.category = product.category;
        
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${product.img}" alt="${product.title}">
                <div class="hover-overlay">
                    <button class="view-btn" data-id="${id}">Quick View</button>
                </div>
            </div>
            <div class="card-info">
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h3>${product.title}</h3>
                <p class="desc">${product.desc}</p>
                <div class="card-footer">
                    <span class="price">Rs. ${formatPrice(product.price)}</span>
                    <button class="add-to-cart" data-id="${id}" aria-label="Add to cart">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        productGridContainer.appendChild(card);
    });
    
    // Bind Action Triggers
    setupQuickAddTriggers();
    setupModalTriggers();
}

// Category Filtering Navigation
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        activeCategory = btn.dataset.filter;
        renderProducts();
    });
});

// Search Overlay Actions
if (openSearchBtn) {
    openSearchBtn.addEventListener('click', () => {
        searchPanel.classList.toggle('active');
        if (searchPanel.classList.contains('active')) {
            searchInput.focus();
        }
    });
}

if (closeSearchBtn) {
    closeSearchBtn.addEventListener('click', () => {
        searchPanel.classList.remove('active');
    });
}

// Close search bar when clicking outside it
document.addEventListener('click', (e) => {
    if (searchPanel && openSearchBtn && !searchPanel.contains(e.target) && !openSearchBtn.contains(e.target)) {
        searchPanel.classList.remove('active');
    }
});

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderProducts();
    });
}

// User Profile / Authentication Modal
function updateAuthUI() {
    if (!openAuthBtn) return;
    if (currentUser) {
        const firstName = currentUser.name.split(' ')[0];
        openAuthBtn.innerHTML = `<span class="user-greeting">Hi, ${firstName}</span>`;
    } else {
        openAuthBtn.innerHTML = `<i class="fas fa-user"></i>`;
    }
}

if (openAuthBtn) {
    openAuthBtn.addEventListener('click', () => {
        if (currentUser) {
            if (confirm(`Logged in as ${currentUser.name}.\n\nWould you like to Log Out?`)) {
                currentUser = null;
                localStorage.removeItem('zentro_logged_in_user');
                updateAuthUI();
                showToast("Logged out successfully.");
            }
        } else {
            authModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
}

if (closeAuthModal) {
    closeAuthModal.addEventListener('click', () => {
        authModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

if (authModal) {
    authModal.addEventListener('click', (e) => {
        if (e.target === authModal) {
            authModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Auth modal tabs logic
function showLoginTab() {
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
}

function showRegisterTab() {
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
}

if (tabLogin) tabLogin.addEventListener('click', showLoginTab);
if (tabRegister) tabRegister.addEventListener('click', showRegisterTab);
if (switchToRegister) switchToRegister.addEventListener('click', showRegisterTab);
if (switchToLogin) switchToLogin.addEventListener('click', showLoginTab);

// Form submissions
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const phone = document.getElementById('regPhone').value.trim();
        const address = document.getElementById('regAddress').value.trim();
        const password = document.getElementById('regPassword').value;
        
        let users = [];
        try {
            const stored = localStorage.getItem('zentro_users');
            if (stored) users = JSON.parse(stored);
        } catch (err) {
            console.error(err);
        }
        
        if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
            showToast("This email is already registered. Please login.");
            showLoginTab();
            return;
        }
        
        const newUser = { name, email, phone, address, password };
        users.push(newUser);
        
        try {
            localStorage.setItem('zentro_users', JSON.stringify(users));
            localStorage.setItem('zentro_logged_in_user', JSON.stringify(newUser));
        } catch (err) {
            console.error(err);
        }
        
        currentUser = newUser;
        updateAuthUI();
        registerForm.reset();
        authModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        showToast(`Welcome, ${name}! Account registered successfully.`);
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        
        let users = [];
        try {
            const stored = localStorage.getItem('zentro_users');
            if (stored) users = JSON.parse(stored);
        } catch (err) {
            console.error(err);
        }
        
        const matched = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
        if (matched) {
            currentUser = matched;
            try {
                localStorage.setItem('zentro_logged_in_user', JSON.stringify(matched));
            } catch (err) {
                console.error(err);
            }
            updateAuthUI();
            loginForm.reset();
            authModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            showToast(`Welcome back, ${matched.name}!`);
        } else {
            showToast("Invalid credentials. Please register or retry.");
        }
    });
}

// Dining Preference Selectors
if (dineinBtn) {
    dineinBtn.addEventListener('click', () => {
        diningPreference = "dinein";
        dineinBtn.classList.add('active');
        takeawayBtn.classList.remove('active');
        showToast("Selected Dining Preference: Dine-In");
    });
}

if (takeawayBtn) {
    takeawayBtn.addEventListener('click', () => {
        diningPreference = "takeaway";
        takeawayBtn.classList.add('active');
        dineinBtn.classList.remove('active');
        showToast("Selected Dining Preference: Takeaway");
    });
}

// Cart Sidebar Actions
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

if (openCartBtn) openCartBtn.addEventListener('click', openCart);
if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

// Show Toast Alerts
function showToast(msg) {
    const toastMsg = document.getElementById('toastMsg');
    if (toastMsg && toast) {
        toastMsg.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Modal View Handler (Quick View)
function setupModalTriggers() {
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            const product = productsData[id];
            currentProductId = id;
            currentProductSize = null;
            
            if (product) {
                modalImg.src = product.img;
                modalTitle.textContent = product.title;
                modalDesc.textContent = product.desc;
                
                // Populating Sizing Buttons if present
                if (product.sizes) {
                    modalSizeGroup.style.display = 'block';
                    sizeSelectorGroup.innerHTML = '';
                    
                    const sizes = Object.keys(product.sizes);
                    currentProductSize = sizes[0]; // Set default size to first
                    currentProductPrice = product.sizes[currentProductSize];
                    
                    sizes.forEach((size, idx) => {
                        const sizeBtn = document.createElement('button');
                        sizeBtn.className = `size-btn ${idx === 0 ? 'active' : ''}`;
                        sizeBtn.textContent = size;
                        sizeBtn.type = 'button';
                        sizeBtn.addEventListener('click', () => {
                            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                            sizeBtn.classList.add('active');
                            currentProductSize = size;
                            currentProductPrice = product.sizes[size];
                            updateModalTotal();
                        });
                        sizeSelectorGroup.appendChild(sizeBtn);
                    });
                } else {
                    modalSizeGroup.style.display = 'none';
                    currentProductPrice = product.price;
                }
                
                modalPrice.textContent = `Rs. ${formatPrice(currentProductPrice)}`;
                
                // Reset select controls & defaults
                addonSelect.value = "0";
                qtyInput.value = "1";
                updateModalTotal();
                
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; 
            }
        });
    });
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Calculate Modal Total Price
function updateModalTotal() {
    if (!modalTotal) return;
    const addonPrice = parseFloat(addonSelect.value);
    const qty = parseInt(qtyInput.value);
    const total = (currentProductPrice + addonPrice) * qty;
    modalTotal.textContent = `Rs. ${formatPrice(total)}`;
}

if (addonSelect) addonSelect.addEventListener('change', updateModalTotal);
if (qtyInput) {
    qtyInput.addEventListener('change', () => {
        if (qtyInput.value < 1) qtyInput.value = 1;
        updateModalTotal();
    });
}

const minusBtn = document.querySelector('.qty-btn.minus');
if (minusBtn) {
    minusBtn.addEventListener('click', () => {
        if (qtyInput.value > 1) {
            qtyInput.value = parseInt(qtyInput.value) - 1;
            updateModalTotal();
        }
    });
}

const plusBtn = document.querySelector('.qty-btn.plus');
if (plusBtn) {
    plusBtn.addEventListener('click', () => {
        qtyInput.value = parseInt(qtyInput.value) + 1;
        updateModalTotal();
    });
}

// Render and Update Order Cart UI
function updateCartUI() {
    let total = 0;
    let count = 0;
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align: center; color: var(--text-secondary); margin-top: 40px;">
                <i class="fas fa-receipt" style="font-size: 3rem; margin-bottom: 15px; color: var(--border-color);"></i>
                <p>Your order is empty.</p>
            </div>
        `;
    } else {
        cart.forEach((item, index) => {
            const itemCost = (item.price + item.addonPrice) * item.qty;
            total += itemCost;
            count += item.qty;
            
            const displayTitle = item.size ? `${item.title} (${item.size})` : item.title;

            const cartItemHTML = `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.title}">
                    <div class="cart-item-info">
                        <h4>${displayTitle}</h4>
                        ${item.addonName !== "Standard Preparation" ? `<span class="cart-item-enhancement">+ ${item.addonName}</span>` : ''}
                        <div class="cart-item-price">Rs. ${formatPrice(item.price + item.addonPrice)}</div>
                        <div class="cart-item-qty-control">
                            <button onclick="changeQty(${index}, -1)"><i class="fas fa-minus"></i></button>
                            <span>${item.qty}</span>
                            <button onclick="changeQty(${index}, 1)"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <button class="remove-cart-item" onclick="removeFromCart(${index})" aria-label="Remove item">
                        <i class="fas fa-trash-can"></i>
                    </button>
                </div>
            `;
            cartItemsContainer.innerHTML += cartItemHTML;
        });
    }

    cartSubtotal.textContent = `Rs. ${formatPrice(total)}`;
    cartCountElement.textContent = count;
}

// Global functions for cart modifications
window.changeQty = function(index, amount) {
    cart[index].qty += amount;
    if (cart[index].qty < 1) {
        cart.splice(index, 1);
    }
    updateCartUI();
};

window.removeFromCart = function(index) {
    const item = cart[index];
    const itemLabel = item.size ? `${item.title} (${item.size})` : item.title;
    cart.splice(index, 1);
    updateCartUI();
    showToast(`Removed ${itemLabel} from your order.`);
};

// Main Menu Quick Add
function setupQuickAddTriggers() {
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.dataset.id;
            const product = productsData[id];
            
            if (product) {
                let sizeName = null;
                let price = product.price;
                
                if (product.sizes) {
                    const sizes = Object.keys(product.sizes);
                    sizeName = sizes[0]; // Choose first size by default
                    price = product.sizes[sizeName];
                }
                
                // Match exact product, standard preparation and size
                const existingIndex = cart.findIndex(item => 
                    item.id === id && 
                    item.addonName === "Standard Preparation" && 
                    item.size === sizeName
                );
                
                if (existingIndex > -1) {
                    cart[existingIndex].qty += 1;
                } else {
                    cart.push({
                        id: id,
                        title: product.title,
                        price: price,
                        img: product.img,
                        qty: 1,
                        addonName: "Standard Preparation",
                        addonPrice: 0,
                        size: sizeName
                    });
                }
                
                updateCartUI();
                
                // Visual Pulse Indicator
                const cartIcon = document.querySelector('.cart-btn i');
                if (cartIcon) {
                    cartIcon.style.transform = 'scale(1.3)';
                    setTimeout(() => {
                        cartIcon.style.transform = 'scale(1)';
                    }, 200);
                }
                
                const itemLabel = sizeName ? `${product.title} (${sizeName})` : product.title;
                showToast(`Added 1 ${itemLabel} to your order.`);
            }
        });
    });
}

// Modal Detail Window Add to Cart
const addToCartModalBtn = document.querySelector('.add-to-cart-modal');
if (addToCartModalBtn) {
    addToCartModalBtn.addEventListener('click', () => {
        const product = productsData[currentProductId];
        const qty = parseInt(qtyInput.value);
        const addonText = addonSelect.options[addonSelect.selectedIndex].text;
        const addonVal = parseFloat(addonSelect.value);
        
        // Extract clean name, e.g., "Add Shaved Black Truffle (+Rs. 2,500.00)" -> "Add Shaved Black Truffle"
        const addonName = addonSelect.value === "0" ? "Standard Preparation" : addonText.split(' (+')[0];
        
        if (product) {
            const existingIndex = cart.findIndex(item => 
                item.id === currentProductId && 
                item.addonName === addonName &&
                item.size === currentProductSize
            );
            
            if (existingIndex > -1) {
                cart[existingIndex].qty += qty;
            } else {
                cart.push({
                    id: currentProductId,
                    title: product.title,
                    price: currentProductPrice,
                    img: product.img,
                    qty: qty,
                    addonName: addonName,
                    addonPrice: addonVal,
                    size: currentProductSize
                });
            }
            
            updateCartUI();
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            const cartIcon = document.querySelector('.cart-btn i');
            if (cartIcon) {
                cartIcon.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    cartIcon.style.transform = 'scale(1)';
                }, 200);
            }
            
            const itemLabel = currentProductSize ? `${product.title} (${currentProductSize})` : product.title;
            showToast(`Added ${qty} ${itemLabel} to your order.`);
        }
    });
}

// Checkout Form Submission
const checkoutBtn = document.getElementById('checkoutBtn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            const preferenceText = diningPreference === "dinein" ? "Dine-In" : "Takeaway";
            let msg = "";
            
            if (currentUser) {
                msg = `Order placed successfully!\n\nThank you, ${currentUser.name}. Your ${preferenceText} order is being prepared and will be delivered/ready at: ${currentUser.address}.`;
            } else {
                msg = `Guest order placed successfully!\n\nThank you for ordering. Your ${preferenceText} order is now being processed.`;
            }
            
            alert(msg);
            cart = [];
            updateCartUI();
            setTimeout(closeCart, 500);
        } else {
            showToast("Your order is empty. Please add items to checkout.");
        }
    });
}

// Newsletter subscription handler
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        if (email) {
            showToast("Subscribed to newsletter successfully!");
            newsletterForm.reset();
        }
    });
}

// Initialization on Load
renderProducts();
updateAuthUI();
updateCartUI();
