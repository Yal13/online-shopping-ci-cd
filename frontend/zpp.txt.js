/**
 * ShopEasy - Professional E-Commerce Storefront
 * 100% Client-Side Vanilla JavaScript (Zero Server / No Backend Required)
 * Features: 58-Item INR Catalog, Sorting, Search & Filters, Wishlist, Cart & Coupons, Multi-Method Payment,
 * Order Management, Live Tracking, Product Returns, Customer Account, Admin Dashboard & Dark Mode
 */

// ==========================================
// 1. PRODUCT CATALOG DATASET (58 Products in ₹ INR)
// ==========================================
const PRODUCTS_DATA = [
  // --- ELECTRONICS (10 items) ---
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    category: "Electronics",
    badge: "Bestseller",
    price: 1499,
    originalPrice: 2999,
    discountPercent: 50,
    description: "High-fidelity studio audio with active noise cancellation, deep bass, and 30-hour battery life.",
    rating: 4.8,
    reviewsCount: 1240,
    stock: "In Stock",
    stockQuantity: 35,
    deliveryDays: 3,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Portable Bluetooth Speaker (20W Bass)",
    category: "Electronics",
    badge: "Popular",
    price: 1799,
    originalPrice: 3499,
    discountPercent: 48,
    description: "IPX7 waterproof wireless speaker with punchy bass, dual passive radiators, and 14-hour playtime.",
    rating: 4.7,
    reviewsCount: 1120,
    stock: "In Stock",
    stockQuantity: 28,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Ergonomic RGB Mechanical Keyboard",
    category: "Electronics",
    badge: "Pro Gaming",
    price: 2999,
    originalPrice: 4499,
    discountPercent: 33,
    description: "Customizable per-key RGB backlit mechanical keyboard with tactile blue switches and detachable braided cable.",
    rating: 4.8,
    reviewsCount: 520,
    stock: "In Stock",
    stockQuantity: 15,
    deliveryDays: 4,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Wireless Precision Gaming Mouse",
    category: "Electronics",
    badge: "Bestseller",
    price: 799,
    originalPrice: 1499,
    discountPercent: 47,
    description: "Ultra-lightweight wireless mouse with 16,000 DPI optical sensor, pure PTFE feet, and 6 programmable buttons.",
    rating: 4.9,
    reviewsCount: 1430,
    stock: "In Stock",
    stockQuantity: 42,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "65W GaN Fast Charger Power Adapter",
    category: "Electronics",
    badge: "Essential",
    price: 1299,
    originalPrice: 2199,
    discountPercent: 41,
    description: "Ultra-compact Gallium Nitride 65W dual Type-C + USB-A fast charger for laptops, tablets, and smartphones.",
    rating: 4.7,
    reviewsCount: 780,
    stock: "In Stock",
    stockQuantity: 50,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    name: "True Wireless ANC Bluetooth Earbuds",
    category: "Electronics",
    badge: "Featured",
    price: 1999,
    originalPrice: 3999,
    discountPercent: 50,
    description: "Active Noise Cancelling earbuds with Quad Mic ENC for crystal-clear calls and 32 hours total playtime.",
    rating: 4.6,
    reviewsCount: 960,
    stock: "In Stock",
    stockQuantity: 24,
    deliveryDays: 3,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    name: "1080p Full HD Pro Streaming Webcam",
    category: "Electronics",
    badge: "New Arrival",
    price: 1899,
    originalPrice: 2999,
    discountPercent: 37,
    description: "Full HD 1080p 60FPS autofocus webcam with dual noise-reduction microphones and privacy shutter cover.",
    rating: 4.5,
    reviewsCount: 430,
    stock: "In Stock",
    stockQuantity: 18,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500&auto=format&fit=crop&q=80"
  },
  {
    "id": 8,
    name: "7-in-1 Aluminum USB-C Hub Adapter",
    category: "Electronics",
    badge: "Hot Deal",
    price: 1149,
    originalPrice: 1999,
    discountPercent: 43,
    description: "Includes 4K HDMI, 100W Power Delivery, SD/TF card reader, and 3 high-speed USB 3.0 ports.",
    rating: 4.6,
    reviewsCount: 610,
    stock: "In Stock",
    stockQuantity: 30,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 9,
    name: "20000mAh Ultra-Fast Power Bank (22.5W)",
    category: "Electronics",
    badge: "Bestseller",
    price: 1399,
    originalPrice: 2499,
    discountPercent: 44,
    description: "High-capacity external battery pack with dual USB and Type-C two-way fast charging for multi-device power.",
    rating: 4.7,
    reviewsCount: 1850,
    stock: "In Stock",
    stockQuantity: 65,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 10,
    name: "Slim Multi-Device Bluetooth Keyboard",
    category: "Electronics",
    badge: "Productivity",
    price: 1249,
    originalPrice: 1899,
    discountPercent: 34,
    description: "Compact rechargeable wireless keyboard compatible with Windows, Mac, iOS, iPadOS, and Android.",
    rating: 4.4,
    reviewsCount: 340,
    stock: "In Stock",
    stockQuantity: 20,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b909?w=500&auto=format&fit=crop&q=80"
  },

  // --- SMARTPHONES & ACCESSORIES (10 items) ---
  {
    id: 11,
    name: "Smartphone 5G Pro (128GB Storage)",
    category: "Smartphones & Accessories",
    badge: "Hot Deal",
    price: 14999,
    originalPrice: 19999,
    discountPercent: 25,
    description: "120Hz FHD+ Super AMOLED display, 64MP AI triple camera, 5000mAh battery with 33W fast charging.",
    rating: 4.7,
    reviewsCount: 3410,
    stock: "In Stock",
    stockQuantity: 12,
    deliveryDays: 3,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 12,
    name: "Slim Shockproof Matte Phone Case",
    category: "Smartphones & Accessories",
    badge: "Essential",
    price: 499,
    originalPrice: 999,
    discountPercent: 50,
    description: "Military-grade drop protection with a soft-touch matte finish, camera lens bezel, and tactile buttons.",
    rating: 4.7,
    reviewsCount: 2150,
    stock: "In Stock",
    stockQuantity: 80,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 13,
    name: "9H Hardness Edge-to-Edge Tempered Glass (2-Pack)",
    category: "Smartphones & Accessories",
    badge: "Protection",
    price: 299,
    originalPrice: 599,
    discountPercent: 50,
    description: "Scratch-resistant tempered glass screen protector with oleophobic anti-fingerprint coating.",
    rating: 4.6,
    reviewsCount: 1820,
    stock: "In Stock",
    stockQuantity: 95,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 14,
    name: "15W Magnetic Wireless Charging Pad",
    category: "Smartphones & Accessories",
    badge: "New Launch",
    price: 899,
    originalPrice: 1799,
    discountPercent: 50,
    description: "Ultra-slim Qi-certified magnetic fast wireless charger with intelligent temperature control.",
    rating: 4.5,
    reviewsCount: 520,
    stock: "In Stock",
    stockQuantity: 22,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    image: "https://images.unsplash.com/photo-1622445262464-84b1456045b6?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 15,
    name: "Braided 100W USB-C Fast Charging Cable (2m)",
    category: "Smartphones & Accessories",
    badge: "Durable",
    price: 349,
    originalPrice: 699,
    discountPercent: 50,
    description: "Heavy-duty nylon braided fast charging and high-speed data transfer cable with reinforced joints.",
    rating: 4.8,
    reviewsCount: 1490,
    stock: "In Stock",
    stockQuantity: 70,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 16,
    name: "Universal 360° Rotating Car Phone Mount",
    category: "Smartphones & Accessories",
    badge: "Auto Gear",
    price: 449,
    originalPrice: 899,
    discountPercent: 50,
    description: "Secure suction dashboard and windshield mobile holder with quick one-touch release clamp.",
    rating: 4.5,
    reviewsCount: 870,
    stock: "In Stock",
    stockQuantity: 40,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 17,
    name: "Bluetooth Selfie Stick with Tripod Stand",
    category: "Smartphones & Accessories",
    badge: "Creator Kit",
    price: 599,
    originalPrice: 1199,
    discountPercent: 50,
    description: "Integrated wireless remote shutter, 360° rotating head, and lightweight aluminum extension pole.",
    rating: 4.4,
    reviewsCount: 630,
    stock: "In Stock",
    stockQuantity: 25,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 18,
    name: "Adjustable Aluminum Mobile & Tablet Stand",
    category: "Smartphones & Accessories",
    badge: "Top Rated",
    price: 399,
    originalPrice: 799,
    discountPercent: 50,
    description: "Ergonomic foldable desktop stand with silicone anti-slip pads and cable management cutout.",
    rating: 4.8,
    reviewsCount: 1920,
    stock: "In Stock",
    stockQuantity: 55,
    deliveryDays: 3,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1586775490184-b79f0621891f?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 19,
    name: "7-in-1 Screen & Earbuds Cleaning Kit",
    category: "Smartphones & Accessories",
    badge: "Maintenance",
    price: 249,
    originalPrice: 499,
    discountPercent: 50,
    description: "Compact kit with retractable keyboard brush, screen cleaner spray, lens cloth, and earbud tip pen.",
    rating: 4.7,
    reviewsCount: 1140,
    stock: "In Stock",
    stockQuantity: 60,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 20,
    name: "Dual Port 38W Fast Car Charger Adapter",
    category: "Smartphones & Accessories",
    badge: "Essential",
    price: 499,
    originalPrice: 999,
    discountPercent: 50,
    description: "Compact car adapter with 20W PD Type-C and 18W QC3.0 USB-A ports with smart surge protection.",
    rating: 4.6,
    reviewsCount: 740,
    stock: "In Stock",
    stockQuantity: 35,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=80"
  },

  // --- WEARABLES (8 items) ---
  {
    id: 21,
    name: "Smart Fitness Watch Pro (AMOLED Display)",
    category: "Wearables",
    badge: "Trending",
    price: 2499,
    originalPrice: 4999,
    discountPercent: 50,
    description: "1.78-inch AMOLED display, SpO2 blood oxygen monitor, 24/7 heart rate tracking, and 100+ sports modes.",
    rating: 4.6,
    reviewsCount: 890,
    stock: "In Stock",
    stockQuantity: 25,
    deliveryDays: 4,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 22,
    name: "Smart Fitness Band with Heart Rate Monitor",
    category: "Wearables",
    badge: "Fitness",
    price: 1299,
    originalPrice: 2499,
    discountPercent: 48,
    description: "Color touch display with 24-hour continuous heart rate tracking, step counter, and 14-day battery.",
    rating: 4.4,
    reviewsCount: 1340,
    stock: "In Stock",
    stockQuantity: 38,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 23,
    name: "Rugged Outdoor GPS Sports Smartwatch",
    category: "Wearables",
    badge: "New Arrival",
    price: 3499,
    originalPrice: 6999,
    discountPercent: 50,
    description: "Military certified shockproof smartwatch with standalone GPS navigation, altimeter, and compass.",
    rating: 4.8,
    reviewsCount: 410,
    stock: "In Stock",
    stockQuantity: 14,
    deliveryDays: 3,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 24,
    name: "Smart Health Ring (Sleep & Temp Tracking)",
    category: "Wearables",
    badge: "Innovation",
    price: 4999,
    originalPrice: 8999,
    discountPercent: 44,
    description: "Titanium smart ring measuring sleep cycles, HRV, body temperature, and daily recovery scores.",
    rating: 4.7,
    reviewsCount: 260,
    stock: "Only 4 left",
    stockQuantity: 4,
    deliveryDays: 4,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 25,
    name: "Classic Minimalist Digital Sport Watch",
    category: "Wearables",
    badge: "Classic",
    price: 899,
    originalPrice: 1499,
    discountPercent: 40,
    description: "50m waterproof digital watch with LED backlight, daily alarm, stopwatch, and countdown timer.",
    rating: 4.5,
    reviewsCount: 920,
    stock: "In Stock",
    stockQuantity: 45,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 26,
    name: "Silicone Replacement Watch Straps (3-Pack)",
    category: "Wearables",
    badge: "Accessories",
    price: 399,
    originalPrice: 799,
    discountPercent: 50,
    description: "Sweatproof soft silicone quick-release watch bands in Black, Navy Blue, and Army Green.",
    rating: 4.6,
    reviewsCount: 680,
    stock: "In Stock",
    stockQuantity: 50,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 27,
    name: "Stainless Steel Milanese Loop Watch Band",
    category: "Wearables",
    badge: "Premium",
    price: 599,
    originalPrice: 1199,
    discountPercent: 50,
    description: "Magnetic closure stainless steel mesh wristband compatible with 20mm and 22mm smartwatches.",
    rating: 4.7,
    reviewsCount: 470,
    stock: "In Stock",
    stockQuantity: 30,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 28,
    name: "Lightweight Marathon Running Smartwatch",
    category: "Wearables",
    badge: "Performance",
    price: 2899,
    originalPrice: 4999,
    discountPercent: 42,
    description: "Built-in cadence sensor, VO2 Max estimation, heart rate zones, and customized interval training.",
    rating: 4.7,
    reviewsCount: 350,
    stock: "In Stock",
    stockQuantity: 16,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=500&auto=format&fit=crop&q=80"
  },

  // --- FASHION (10 items) ---
  {
    id: 29,
    name: "Men's Performance Running Shoes",
    category: "Fashion",
    badge: "New Arrival",
    price: 2999,
    originalPrice: 4999,
    discountPercent: 40,
    description: "Ultra-lightweight breathable mesh upper with responsive EVA foam cushioning for running & gym workouts.",
    rating: 4.6,
    reviewsCount: 580,
    stock: "Only 4 left",
    stockQuantity: 4,
    deliveryDays: 5,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: true,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 30,
    name: "Men's Breathable Everyday Casual Sneakers",
    category: "Fashion",
    badge: "Popular",
    price: 1899,
    originalPrice: 3299,
    discountPercent: 42,
    description: "Modern lightweight sneakers with cushioned memory foam insole and slip-resistant rubber outsole.",
    rating: 4.5,
    reviewsCount: 740,
    stock: "In Stock",
    stockQuantity: 22,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 31,
    name: "Women's Air Cushion Lightweight Walking Shoes",
    category: "Fashion",
    badge: "New Arrival",
    price: 2199,
    originalPrice: 3799,
    discountPercent: 42,
    description: "Ergonomic arch support walking sneakers designed for all-day comfort, gym, and jogging.",
    rating: 4.7,
    reviewsCount: 610,
    stock: "In Stock",
    stockQuantity: 19,
    deliveryDays: 5,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 32,
    name: "Organic Cotton Crew-Neck Men's T-Shirts (Pack of 2)",
    category: "Fashion",
    badge: "Bestseller",
    price: 799,
    originalPrice: 1499,
    discountPercent: 47,
    description: "100% combed cotton, breathable pre-shrunk fabric with durable double-stitched hems.",
    rating: 4.6,
    reviewsCount: 1420,
    stock: "In Stock",
    stockQuantity: 60,
    deliveryDays: 3,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 33,
    name: "Women's Relaxed Fit Drop-Shoulder T-Shirt",
    category: "Fashion",
    badge: "Trending",
    price: 599,
    originalPrice: 1199,
    discountPercent: 50,
    description: "Ultra-soft cotton blend oversized casual t-shirt with premium ribbed collar and minimal typography.",
    rating: 4.5,
    reviewsCount: 890,
    stock: "In Stock",
    stockQuantity: 40,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 34,
    name: "Unisex Fleece Heavyweight Zip-Up Hoodie",
    category: "Fashion",
    badge: "Winter Warm",
    price: 1499,
    originalPrice: 2799,
    discountPercent: 46,
    description: "Cozy brushed fleece interior hoodie with kangaroo front pockets and metal zipper closure.",
    rating: 4.8,
    reviewsCount: 930,
    stock: "In Stock",
    stockQuantity: 25,
    deliveryDays: 4,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 35,
    name: "Men's Slim Fit Stretchable Denim Jeans",
    category: "Fashion",
    badge: "Classic",
    price: 1299,
    originalPrice: 2499,
    discountPercent: 48,
    description: "Premium cotton-elastane blend denim offering all-day flexibility, authentic wash, and 5-pocket styling.",
    rating: 4.4,
    reviewsCount: 1150,
    stock: "In Stock",
    stockQuantity: 30,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 36,
    name: "Polarized UV400 Wayfarer Sunglasses",
    category: "Fashion",
    badge: "Bestseller",
    price: 699,
    originalPrice: 1499,
    discountPercent: 53,
    description: "Glare-reducing polarized TAC lenses with lightweight matte polycarbonate frame and protective case.",
    rating: 4.7,
    reviewsCount: 1680,
    stock: "In Stock",
    stockQuantity: 45,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 37,
    name: "Genuine Leather Bi-Fold RFID Blocking Wallet",
    category: "Fashion",
    badge: "Handcrafted",
    price: 549,
    originalPrice: 1099,
    discountPercent: 50,
    description: "Top-grain leather wallet with 8 card slots, dual currency compartments, and quick ID window.",
    rating: 4.6,
    reviewsCount: 2100,
    stock: "In Stock",
    stockQuantity: 50,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 38,
    name: "Water-Resistant College Travel Backpack",
    category: "Fashion",
    badge: "Essential",
    price: 1199,
    originalPrice: 2199,
    discountPercent: 45,
    description: "Spacious 30L backpack with reflective safety strips, water bottle holders, and anti-theft back pocket.",
    rating: 4.6,
    reviewsCount: 780,
    stock: "In Stock",
    stockQuantity: 35,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?w=500&auto=format&fit=crop&q=80"
  },

  // --- HOME & LIFESTYLE (10 items) ---
  {
    id: 39,
    name: "Smart Wi-Fi LED Color Bulb (9W RGB)",
    category: "Home & Lifestyle",
    badge: "Smart Home",
    price: 699,
    originalPrice: 1299,
    discountPercent: 46,
    description: "16 million RGB colors, dimmable white light, voice assistant support, and smart schedule automation.",
    rating: 4.5,
    reviewsCount: 830,
    stock: "In Stock",
    stockQuantity: 55,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1550985616-10810253b84d?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 40,
    name: "Modern Dimmable LED Touch Desk Lamp",
    category: "Home & Lifestyle",
    badge: "Work From Home",
    price: 1099,
    originalPrice: 1999,
    discountPercent: 45,
    description: "Eye-caring flicker-free study lamp with 3 color modes, 5 brightness levels, and built-in USB charger.",
    rating: 4.7,
    reviewsCount: 640,
    stock: "In Stock",
    stockQuantity: 28,
    deliveryDays: 3,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 41,
    name: "Stainless Steel Thermal Flask (750ml)",
    category: "Home & Lifestyle",
    badge: "Eco Pick",
    price: 599,
    originalPrice: 999,
    discountPercent: 40,
    description: "Double-wall vacuum insulated bottle. Keeps drinks icy cold for 24 hours or piping hot for 12 hours.",
    rating: 4.6,
    reviewsCount: 950,
    stock: "In Stock",
    stockQuantity: 48,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 42,
    name: "Memory Foam Lumbar Support Back Cushion",
    category: "Home & Lifestyle",
    badge: "Ergonomics",
    price: 799,
    originalPrice: 1599,
    discountPercent: 50,
    description: "High-density orthopedic memory foam backrest for office chairs and car seats with breathable 3D mesh.",
    rating: 4.7,
    reviewsCount: 1120,
    stock: "In Stock",
    stockQuantity: 32,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 43,
    name: "1.8L Stainless Steel Electric Kettle",
    category: "Home & Lifestyle",
    badge: "Kitchen Pro",
    price: 899,
    originalPrice: 1699,
    discountPercent: 47,
    description: "1500W rapid boiling kettle with automatic shutoff, boil-dry protection, and 360° swivel power base.",
    rating: 4.6,
    reviewsCount: 2240,
    stock: "In Stock",
    stockQuantity: 40,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 44,
    name: "Rechargeable Desk & Table Fan (4000mAh)",
    category: "Home & Lifestyle",
    badge: "Cooling",
    price: 849,
    originalPrice: 1499,
    discountPercent: 43,
    description: "Silent brushless motor personal fan with 4 speed settings, 90° tilt adjustment, and Type-C charging.",
    rating: 4.5,
    reviewsCount: 510,
    stock: "In Stock",
    stockQuantity: 25,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1618941716939-553df3c6c278?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 45,
    name: "Minimalist Wooden Desk Organizer Tray",
    category: "Home & Lifestyle",
    badge: "Office Decor",
    price: 499,
    originalPrice: 899,
    discountPercent: 45,
    description: "Natural pine wood multi-slot station for pens, smartphone, business cards, and desktop stationery.",
    rating: 4.8,
    reviewsCount: 820,
    stock: "In Stock",
    stockQuantity: 30,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 46,
    name: "Ceramic Matte Finish Coffee Mug (Set of 2)",
    category: "Home & Lifestyle",
    badge: "Dining",
    price: 399,
    originalPrice: 799,
    discountPercent: 50,
    description: "350ml microwave and dishwasher safe handcrafted stoneware mugs for coffee, tea, and hot chocolate.",
    rating: 4.6,
    reviewsCount: 970,
    stock: "In Stock",
    stockQuantity: 45,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 47,
    name: "Silent Non-Ticking Modern Wall Clock (12 Inch)",
    category: "Home & Lifestyle",
    badge: "Home Decor",
    price: 649,
    originalPrice: 1199,
    discountPercent: 46,
    description: "Contemporary minimalist wall clock with sweep second hand movement and clear bold numerals.",
    rating: 4.5,
    reviewsCount: 460,
    stock: "In Stock",
    stockQuantity: 20,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 48,
    name: "Natural Essential Oil Wardrobe Air Freshener",
    category: "Home & Lifestyle",
    badge: "Aromatherapy",
    price: 299,
    originalPrice: 499,
    discountPercent: 40,
    description: "Long-lasting lavender and lemongrass fragrance beads for closets, shoe racks, and bedrooms.",
    rating: 4.6,
    reviewsCount: 1340,
    stock: "In Stock",
    stockQuantity: 70,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&auto=format&fit=crop&q=80"
  },

  // --- PERSONAL & TRAVEL (10 items) ---
  {
    id: 49,
    name: "Minimalist Everyday Laptop Backpack (15.6 Inch)",
    category: "Personal & Travel",
    badge: "Top Rated",
    price: 999,
    originalPrice: 1999,
    discountPercent: 50,
    description: "Water-resistant, durable nylon backpack with dedicated 15.6-inch padded laptop sleeve & USB charging port.",
    rating: 4.5,
    reviewsCount: 640,
    stock: "In Stock",
    stockQuantity: 34,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 50,
    name: "Waterproof Travel Packing Cubes Set (6-Piece)",
    category: "Personal & Travel",
    badge: "Travel Essential",
    price: 699,
    originalPrice: 1399,
    discountPercent: 50,
    description: "Luggage compression organizer bags with breathable mesh tops, shoe bag, and dual zippers.",
    rating: 4.8,
    reviewsCount: 1290,
    stock: "In Stock",
    stockQuantity: 45,
    deliveryDays: 3,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 51,
    name: "Memory Foam Ergonomic Neck Travel Pillow",
    category: "Personal & Travel",
    badge: "Comfort",
    price: 549,
    originalPrice: 1099,
    discountPercent: 50,
    description: "360° head and neck support travel cushion with snap button lock and ultra-soft washable velour cover.",
    rating: 4.7,
    reviewsCount: 1850,
    stock: "In Stock",
    stockQuantity: 50,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 52,
    name: "Waterproof Hanging Toiletry Travel Bag",
    category: "Personal & Travel",
    badge: "Organizer",
    price: 499,
    originalPrice: 999,
    discountPercent: 50,
    description: "Multi-compartment grooming bag with heavy-duty metal hook, waterproof PVC pockets, and handle.",
    rating: 4.6,
    reviewsCount: 980,
    stock: "In Stock",
    stockQuantity: 36,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 53,
    name: "Padded Shockproof Laptop Sleeve Case (15.6 Inch)",
    category: "Personal & Travel",
    badge: "Protection",
    price: 449,
    originalPrice: 899,
    discountPercent: 50,
    description: "3-layer protective notebook sleeve with plush fleece lining, front accessory zipper, and splash resistance.",
    rating: 4.7,
    reviewsCount: 1420,
    stock: "In Stock",
    stockQuantity: 60,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 54,
    name: "45L Expandable Cabin Travel Duffle Bag",
    category: "Personal & Travel",
    badge: "Weekender",
    price: 1499,
    originalPrice: 2799,
    discountPercent: 46,
    description: "Heavy-duty gym and weekend bag with dedicated ventilated shoe compartment and luggage trolley strap.",
    rating: 4.6,
    reviewsCount: 730,
    stock: "In Stock",
    stockQuantity: 22,
    deliveryDays: 4,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 55,
    name: "Automatic Windproof Compact Folding Umbrella",
    category: "Personal & Travel",
    badge: "All Weather",
    price: 499,
    originalPrice: 899,
    discountPercent: 44,
    description: "10-rib reinforced fiberglass frame with one-button auto open/close and UV sun-blocking black coating.",
    rating: 4.5,
    reviewsCount: 890,
    stock: "In Stock",
    stockQuantity: 40,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 56,
    name: "Heavy-Duty Foldable Reusable Grocery Bags (Set of 3)",
    category: "Personal & Travel",
    badge: "Eco Friendly",
    price: 349,
    originalPrice: 599,
    discountPercent: 42,
    description: "Ripstop waterproof polyester shopping bags holding up to 20kg, folding down to palm size.",
    rating: 4.7,
    reviewsCount: 1650,
    stock: "In Stock",
    stockQuantity: 85,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 57,
    name: "Lightweight Hard-Shell Cabin Luggage (20 Inch)",
    category: "Personal & Travel",
    badge: "Premium Travel",
    price: 2799,
    originalPrice: 5499,
    discountPercent: 49,
    description: "Scratch-resistant polycarbonate trolley suitcase with 360° silent dual spinner wheels and TSA lock.",
    rating: 4.8,
    reviewsCount: 520,
    stock: "Only 3 left",
    stockQuantity: 3,
    deliveryDays: 4,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 58,
    name: "Universal All-in-One Worldwide Travel Adapter",
    category: "Personal & Travel",
    badge: "Global Gear",
    price: 799,
    originalPrice: 1499,
    discountPercent: 47,
    description: "Covers US, UK, EU, AU sockets with 4 smart USB charging ports and integrated safety fuse protection.",
    rating: 4.8,
    reviewsCount: 1940,
    stock: "In Stock",
    stockQuantity: 45,
    deliveryDays: 3,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=80"
  }
];

// ==========================================
// 2. GLOBAL STATE & LOCALSTORAGE
// ==========================================
let productsList = [...PRODUCTS_DATA];
let cart = [];
let wishlist = [];
let orders = [];
let returnRequests = [];
let activeCategory = 'all';
let searchQuery = '';
let currentSort = 'featured'; // 'featured', 'price-low', 'price-high', 'rating', 'newest', 'discount'
let appliedCoupon = null; // { code, type, value }
let selectedPaymentMethod = 'Google Pay';
let currentTheme = 'light';
let customerProfile = {
  name: 'Rahul Sharma',
  phone: '9876543210',
  email: 'rahul.sharma@example.com',
  address: 'Flat 402, Green Glen Layout, Outer Ring Road',
  city: 'Bengaluru',
  state: 'Karnataka',
  pincode: '560103'
};

// Safely load state from localStorage
try {
  const savedCart = localStorage.getItem('shopeasy_cart_v2');
  if (savedCart) cart = JSON.parse(savedCart);

  const savedWishlist = localStorage.getItem('shopeasy_wishlist_v2');
  if (savedWishlist) wishlist = JSON.parse(savedWishlist);

  const savedCoupon = localStorage.getItem('shopeasy_coupon_v2');
  if (savedCoupon) appliedCoupon = JSON.parse(savedCoupon);

  const savedOrders = localStorage.getItem('shopeasy_orders_v2');
  if (savedOrders) orders = JSON.parse(savedOrders);

  const savedReturns = localStorage.getItem('shopeasy_returns_v2');
  if (savedReturns) returnRequests = JSON.parse(savedReturns);

  const savedTheme = localStorage.getItem('shopeasy_theme');
  if (savedTheme) currentTheme = savedTheme;

  const savedProfile = localStorage.getItem('shopeasy_profile_v2');
  if (savedProfile) customerProfile = JSON.parse(savedProfile);
} catch (e) {
  console.warn('Storage initialisation error:', e);
}

// ==========================================
// 3. UTILITY FUNCTIONS
// ==========================================
function formatINR(amount) {
  return '₹' + Math.max(0, Math.round(amount)).toLocaleString('en-IN');
}

function getExpectedDeliveryDate(daysToAdd = 4) {
  const d = new Date();
  d.setDate(d.getDate() + daysToAdd);
  return d.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

function copyCouponCode(code) {
  const couponInput = document.getElementById('cart-coupon-input');
  if (couponInput) couponInput.value = code;
  applyCoupon(code);
  openCartDrawer();
}

// ==========================================
// 4. THEME (DARK / LIGHT) CONTROLLER
// ==========================================
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
  try {
    localStorage.setItem('shopeasy_theme', theme);
  } catch (e) {}
}

function toggleTheme() {
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  notifyUser('Theme Changed', `Switched to ${newTheme.toUpperCase()} mode`, '🌓', 'info');
}

// ==========================================
// 5. TOAST & NOTIFICATIONS CONTROLLER
// ==========================================
function requestNotificationPermission() {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
  }
}

function notifyUser(title, message, icon = 'ℹ️', type = 'success') {
  showToast(message, icon, type);

  if ('Notification' in window && Notification.permission === 'granted') {
    try {
      new Notification(title, {
        body: message,
        icon: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&auto=format&fit=crop&q=80'
      });
    } catch (e) {}
  }
}

function showToast(message, icon = 'ℹ️', type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ==========================================
// 6. DOM REFERENCES
// ==========================================
// Catalog & Filters
const productsGrid = document.getElementById('products-grid');
const categoryFilters = document.getElementById('category-filters');
const productCountText = document.getElementById('product-count-text');
const catalogHeading = document.getElementById('catalog-heading');
const searchInput = document.getElementById('catalog-search-input');
const clearSearchBtn = document.getElementById('clear-search-btn');
const catalogSortSelect = document.getElementById('catalog-sort-select');

// Badges
const cartCountBadge = document.getElementById('cart-count-badge');
const wishlistCountBadge = document.getElementById('wishlist-count-badge');

// Cart Drawer
const cartToggleBtn = document.getElementById('cart-toggle-btn');
const cartDrawer = document.getElementById('cart-drawer');
const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartItemsContainer = document.getElementById('cart-items-container');
const drawerItemCount = document.getElementById('drawer-item-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartDiscountRow = document.getElementById('cart-discount-row');
const cartDiscountAmount = document.getElementById('cart-discount-amount');
const cartDeliveryCharge = document.getElementById('cart-delivery-charge');
const cartTotalPrice = document.getElementById('cart-total-price');
const checkoutBtn = document.getElementById('checkout-btn');
const clearCartBtn = document.getElementById('clear-cart-btn');

// Cart Coupon
const cartCouponInput = document.getElementById('cart-coupon-input');
const cartApplyCouponBtn = document.getElementById('cart-apply-coupon-btn');
const cartCouponMessage = document.getElementById('cart-coupon-message');
const cartActiveCouponTag = document.getElementById('cart-active-coupon-tag');
const activeCouponName = document.getElementById('active-coupon-name');
const cartRemoveCouponBtn = document.getElementById('cart-remove-coupon-btn');

// Wishlist Modal
const wishlistModal = document.getElementById('wishlist-modal');
const closeWishlistModalBtn = document.getElementById('close-wishlist-modal-btn');
const wishlistItemsContainer = document.getElementById('wishlist-items-container');
const wishlistToggleBtn = document.getElementById('wishlist-toggle-btn');
const navWishlistLink = document.getElementById('nav-wishlist-link');

// My Orders Modal
const ordersModal = document.getElementById('orders-modal');
const closeOrdersModalBtn = document.getElementById('close-orders-modal-btn');
const ordersListContainer = document.getElementById('orders-list-container');
const navOrdersLink = document.getElementById('nav-orders-link');

// Account Modal
const accountModal = document.getElementById('account-modal');
const closeAccountModalBtn = document.getElementById('close-account-modal-btn');
const accountToggleBtn = document.getElementById('account-toggle-btn');
const navAccountBtnTop = document.getElementById('nav-account-btn-top');
const saveAddressForm = document.getElementById('save-address-form');

// Admin Dashboard Modal
const adminModal = document.getElementById('admin-modal');
const closeAdminModalBtn = document.getElementById('close-admin-modal-btn');
const navAdminBtnTop = document.getElementById('nav-admin-btn-top');
const adminTotalSales = document.getElementById('admin-total-sales');
const adminTotalOrders = document.getElementById('admin-total-orders');
const adminTotalProducts = document.getElementById('admin-total-products');
const adminTotalReturns = document.getElementById('admin-total-returns');
const adminOrdersTbody = document.getElementById('admin-orders-tbody');
const adminProductsTbody = document.getElementById('admin-products-tbody');
const adminReturnsTbody = document.getElementById('admin-returns-tbody');

// Checkout & Payment Modal
const checkoutModal = document.getElementById('checkout-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const checkoutForm = document.getElementById('checkout-form');
const checkoutFormStep = document.getElementById('checkout-form-step');
const paymentSelectionStep = document.getElementById('payment-selection-step');
const orderSuccessStep = document.getElementById('order-success-step');

// Step 1 Breakdown
const modalSubtotal = document.getElementById('modal-subtotal');
const modalDiscountRow = document.getElementById('modal-discount-row');
const modalDiscount = document.getElementById('modal-discount');
const modalDeliveryFee = document.getElementById('modal-delivery-fee');
const modalOrderTotal = document.getElementById('modal-order-total');
const btnPayTotalBadge = document.getElementById('btn-pay-total-badge');
const checkoutExpectedDate = document.getElementById('checkout-expected-date');

// Step 2 Payment Breakdown & Alerts
const paymentAmountDisplay = document.getElementById('payment-amount-display');
const paySubtotal = document.getElementById('pay-subtotal');
const payDiscountLine = document.getElementById('pay-discount-line');
const payDiscount = document.getElementById('pay-discount');
const payDelivery = document.getElementById('pay-delivery');
const payCodLine = document.getElementById('pay-cod-line');
const payCodCharge = document.getElementById('pay-cod-charge');
const payFinalTotal = document.getElementById('pay-final-total');
const codNoticeBox = document.getElementById('cod-notice-box');
const paymentDeviceAlert = document.getElementById('payment-device-alert');
const deviceAlertMsg = document.getElementById('device-alert-msg');
const confirmPaymentBtn = document.getElementById('confirm-payment-btn');
const backToDetailsBtn = document.getElementById('back-to-details-btn');

// Step 3 Receipt
const receiptOrderId = document.getElementById('receipt-order-id');
const receiptDeliveryDate = document.getElementById('receipt-delivery-date');
const receiptPaymentMethod = document.getElementById('receipt-payment-method');
const receiptPaymentStatus = document.getElementById('receipt-payment-status');
const receiptDate = document.getElementById('receipt-date');
const receiptItemCount = document.getElementById('receipt-item-count');
const receiptTotal = document.getElementById('receipt-total');
const receiptTrackBtn = document.getElementById('receipt-track-btn');
const continueShoppingBtn = document.getElementById('continue-shopping-btn');

// Tracking Modal
const trackingModal = document.getElementById('tracking-modal');
const closeTrackingModalBtn = document.getElementById('close-tracking-modal-btn');
const trackingOrderInput = document.getElementById('tracking-order-input');
const trackingLookupBtn = document.getElementById('tracking-lookup-btn');
const trackingResultsContainer = document.getElementById('tracking-results-container');
const navTrackLink = document.getElementById('nav-track-link');
const navTrackBtnTop = document.getElementById('nav-track-btn-top');

// Returns Modal
const returnModal = document.getElementById('return-modal');
const closeReturnModalBtn = document.getElementById('close-return-modal-btn');
const returnForm = document.getElementById('return-form');
const returnFormStep = document.getElementById('return-form-step');
const returnSuccessStep = document.getElementById('return-success-step');
const returnOrderSelect = document.getElementById('return-order-select');
const returnProductSelect = document.getElementById('return-product-select');
const returnReasonSelect = document.getElementById('return-reason-select');
const returnComments = document.getElementById('return-comments');
const returnRefundMode = document.getElementById('return-refund-mode');
const receiptReturnId = document.getElementById('receipt-return-id');
const receiptReturnOrderId = document.getElementById('receipt-return-order-id');
const receiptReturnItem = document.getElementById('receipt-return-item');
const receiptReturnReason = document.getElementById('receipt-return-reason');
const receiptReturnAmount = document.getElementById('receipt-return-amount');
const closeReturnSuccessBtn = document.getElementById('close-return-success-btn');
const navReturnLink = document.getElementById('nav-return-link');
const navReturnBtnTop = document.getElementById('nav-return-btn-top');

// ==========================================
// 7. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  initApp();
  setupEventListeners();
});

function initApp() {
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  updateCouponUI();
  updateAccountUI();
  populateReturnOrderDropdown();
}

// ==========================================
// 8. PRODUCT RENDERING, SEARCH, FILTERS & SORT
// ==========================================
function renderProducts() {
  let filtered = [...productsList];

  // 1. Category filter
  if (activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
  }

  // 2. Search query filter
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // 3. Sorting
  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
  } else if (currentSort === 'newest') {
    filtered.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0) || b.id - a.id);
  } else if (currentSort === 'discount') {
    filtered.sort((a, b) => (b.discountPercent || 0) - (a.discountPercent || 0));
  } else {
    // 'featured'
    filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0) || (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
  }

  // Update text
  if (productCountText) {
    productCountText.textContent = `Showing ${filtered.length} product${filtered.length === 1 ? '' : 's'}`;
  }

  if (catalogHeading) {
    if (searchQuery) {
      catalogHeading.textContent = `Search results for "${searchQuery}"`;
    } else if (activeCategory !== 'all') {
      catalogHeading.textContent = `${activeCategory} Collection`;
    } else {
      catalogHeading.textContent = 'Explore All Products';
    }
  }

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="empty-catalog-state" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
        <div class="empty-cart-icon" style="font-size: 3rem; margin-bottom: 0.5rem;">🔍</div>
        <h4>No matching products found</h4>
        <p style="color: var(--text-muted); margin-bottom: 1rem;">Try searching for something else or explore other categories.</p>
        <button class="shop-now-btn" onclick="resetFilters()">View All Products</button>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map(product => {
    const isInWishlist = wishlist.some(w => w.id === product.id);
    const deliveryDateStr = getExpectedDeliveryDate(product.deliveryDays || 4);
    const isOutOfStock = product.stockQuantity === 0 || product.stock === 'Out of Stock';
    const isLowStock = !isOutOfStock && (product.stockQuantity <= 5 || product.stock.includes('left'));

    let stockClass = '';
    let stockText = product.stock;
    if (isOutOfStock) {
      stockClass = 'out-of-stock';
      stockText = 'Out of Stock';
    } else if (isLowStock) {
      stockClass = 'low-stock';
      stockText = `Only ${product.stockQuantity || 4} left`;
    }

    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-image-box">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=80'">
          ${product.badge ? `<span class="product-badge-tag">${product.badge}</span>` : `<span class="product-category-tag">${product.category}</span>`}
          
          <!-- Wishlist Heart Button -->
          <button class="wishlist-btn-card ${isInWishlist ? 'in-wishlist' : ''}" onclick="toggleWishlist(${product.id})" title="${isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}" aria-label="Toggle Wishlist">
            ${isInWishlist ? '❤️' : '🤍'}
          </button>

          <span class="product-rating-badge">★ ${product.rating} (${product.reviewsCount.toLocaleString('en-IN')})</span>
        </div>

        <div class="product-body">
          <h3 class="product-title">${product.name}</h3>
          
          <div class="product-meta-row">
            <span class="stock-pill ${stockClass}">● ${stockText}</span>
            <span class="delivery-estimate-pill">🚚 By ${deliveryDateStr.split(',')[0]}</span>
          </div>

          <p class="product-description">${product.description}</p>
          
          <div class="product-pricing-row">
            <span class="current-price">${formatINR(product.price)}</span>
            ${product.originalPrice ? `<span class="original-price">${formatINR(product.originalPrice)}</span>` : ''}
            ${product.discountPercent ? `<span class="discount-tag">${product.discountPercent}% OFF</span>` : ''}
          </div>

          <div class="product-actions-grid">
            <button class="add-to-cart-btn" onclick="addToCart(${product.id}, this)" ${isOutOfStock ? 'disabled' : ''} aria-label="Add ${product.name} to bag">
              <span>${isOutOfStock ? 'Out of Stock' : 'Add to Bag'}</span>
            </button>
            <button class="buy-now-btn" onclick="buyNow(${product.id})" ${isOutOfStock ? 'disabled' : ''} aria-label="Buy ${product.name} now">
              <span>⚡ Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterByCategory(category) {
  activeCategory = category;
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-category').toLowerCase() === category.toLowerCase());
  });
  renderProducts();
  
  const el = document.getElementById('products-section');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function resetFilters() {
  activeCategory = 'all';
  searchQuery = '';
  currentSort = 'featured';
  if (searchInput) searchInput.value = '';
  if (clearSearchBtn) clearSearchBtn.style.display = 'none';
  if (catalogSortSelect) catalogSortSelect.value = 'featured';
  filterByCategory('all');
}

// ==========================================
// 9. WISHLIST MANAGEMENT
// ==========================================
function toggleWishlist(productId) {
  const product = productsList.find(p => p.id === productId);
  if (!product) return;

  const existingIdx = wishlist.findIndex(w => w.id === productId);

  if (existingIdx > -1) {
    wishlist.splice(existingIdx, 1);
    notifyUser('Wishlist Updated', `Removed "${product.name}" from your wishlist`, '🤍', 'info');
  } else {
    wishlist.push({ ...product });
    notifyUser('Wishlist Updated', `Added "${product.name}" to your wishlist`, '❤️', 'success');
  }

  saveWishlist();
  updateWishlistUI();
  renderProducts();
}

function saveWishlist() {
  try {
    localStorage.setItem('shopeasy_wishlist_v2', JSON.stringify(wishlist));
  } catch (e) {}
}

function updateWishlistUI() {
  if (wishlistCountBadge) wishlistCountBadge.textContent = wishlist.length;
  const accWishlistCount = document.getElementById('acc-wishlist-count');
  if (accWishlistCount) accWishlistCount.textContent = wishlist.length;
  renderWishlistModal();
}

function openWishlistModal() {
  updateWishlistUI();
  wishlistModal.classList.add('active');
}

function closeWishlistModal() {
  wishlistModal.classList.remove('active');
}

function renderWishlistModal() {
  if (!wishlistItemsContainer) return;

  if (wishlist.length === 0) {
    wishlistItemsContainer.innerHTML = `
      <div class="empty-cart-state" style="padding: 2rem 1rem;">
        <div class="empty-cart-icon">🤍</div>
        <h4>Your Wishlist is Empty</h4>
        <p>Save items you love by tapping the heart icon on any product.</p>
        <button class="shop-now-btn" onclick="closeWishlistModal()">Browse Products</button>
      </div>
    `;
    return;
  }

  wishlistItemsContainer.innerHTML = wishlist.map(item => `
    <div class="wishlist-item-row">
      <img src="${item.image}" alt="${item.name}" class="wishlist-img" onerror="this.src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=80'">
      <div class="wishlist-details">
        <h4>${item.name}</h4>
        <div class="wishlist-price">${formatINR(item.price)}</div>
      </div>
      <div class="wishlist-actions">
        <button class="move-to-cart-btn" onclick="moveWishlistToCart(${item.id})">Move to Bag</button>
        <button class="remove-btn" onclick="toggleWishlist(${item.id})" title="Remove item">&times;</button>
      </div>
    </div>
  `).join('');
}

function moveWishlistToCart(productId) {
  addToCart(productId);
  toggleWishlist(productId);
  closeWishlistModal();
  openCartDrawer();
}

// ==========================================
// 10. SHOPPING CART & BUY NOW LOGIC
// ==========================================
function addToCart(productId, buttonElement) {
  requestNotificationPermission();

  const product = productsList.find(p => p.id === productId);
  if (!product) return;

  const existingItemIndex = cart.findIndex(item => item.id === productId);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();

  if (buttonElement) {
    const originalText = buttonElement.innerHTML;
    buttonElement.classList.add('added-animation');
    buttonElement.innerHTML = '<span>✓ Added!</span>';
    setTimeout(() => {
      buttonElement.classList.remove('added-animation');
      buttonElement.innerHTML = originalText;
    }, 700);
  }

  notifyUser(
    'ShopEasy: Item Added',
    `Added "${product.name}" to your bag (${formatINR(product.price)})`,
    '🛒',
    'success'
  );
}

function buyNow(productId) {
  const existingItemIndex = cart.findIndex(item => item.id === productId);
  if (existingItemIndex === -1) {
    const product = productsList.find(p => p.id === productId);
    if (product) {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });
      saveCart();
      updateCartUI();
    }
  }
  openCheckoutModal();
}

function updateQuantity(productId, delta) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex === -1) return;

  cart[itemIndex].quantity += delta;

  if (cart[itemIndex].quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  const item = cart.find(i => i.id === productId);
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();

  if (item) {
    notifyUser('ShopEasy: Item Removed', `Removed "${item.name}" from your bag`, '🗑️', 'info');
  }
}

function clearCart() {
  if (cart.length === 0) return;
  cart = [];
  appliedCoupon = null;
  saveCart();
  saveCoupon();
  updateCartUI();
  updateCouponUI();
  notifyUser('ShopEasy: Bag Cleared', 'All items removed from shopping bag', '🧹', 'info');
}

function saveCart() {
  try {
    localStorage.setItem('shopeasy_cart_v2', JSON.stringify(cart));
  } catch (e) {}
}

function saveCoupon() {
  try {
    if (appliedCoupon) {
      localStorage.setItem('shopeasy_coupon_v2', JSON.stringify(appliedCoupon));
    } else {
      localStorage.removeItem('shopeasy_coupon_v2');
    }
  } catch (e) {}
}

// ==========================================
// 11. COUPON CODES CONTROLLER
// ==========================================
function applyCoupon(codeToApply) {
  const code = (codeToApply || (cartCouponInput ? cartCouponInput.value : '')).trim().toUpperCase();

  if (!code) {
    showCouponMessage('Please enter a coupon code.', 'error');
    notifyUser('Coupon Error', 'Please enter a coupon code.', '⚠️', 'error');
    return;
  }

  if (appliedCoupon && appliedCoupon.code === code) {
    showCouponMessage(`Coupon ${code} is already applied!`, 'error');
    notifyUser('Coupon Notice', `Coupon ${code} is already applied.`, 'ℹ️', 'info');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (code === 'SAVE10') {
    appliedCoupon = { code: 'SAVE10', type: 'percent', value: 10 };
    const saved = subtotal * 0.10;
    saveCoupon();
    updateCartUI();
    updateCouponUI();
    showCouponMessage(`Coupon SAVE10 applied! You saved ${formatINR(saved)}`, 'success');
    notifyUser('Coupon Applied', `Coupon "SAVE10" applied! You saved ${formatINR(saved)}`, '🏷️', 'success');
  } else if (code === 'SAVE200') {
    if (subtotal < 500) {
      showCouponMessage('SAVE200 is applicable on minimum cart value of ₹500.', 'error');
      notifyUser('Invalid Coupon', 'Minimum order value of ₹500 required for SAVE200', '⚠️', 'error');
      return;
    }
    appliedCoupon = { code: 'SAVE200', type: 'flat', value: 200 };
    saveCoupon();
    updateCartUI();
    updateCouponUI();
    showCouponMessage('Coupon SAVE200 applied! You saved ₹200', 'success');
    notifyUser('Coupon Applied', 'Coupon "SAVE200" applied! You saved ₹200', '🏷️', 'success');
  } else if (code === 'FREESHIP') {
    appliedCoupon = { code: 'FREESHIP', type: 'freeship', value: 49 };
    saveCoupon();
    updateCartUI();
    updateCouponUI();
    showCouponMessage('Coupon FREESHIP applied! Free delivery unlocked.', 'success');
    notifyUser('Coupon Applied', 'Coupon "FREESHIP" applied! Free delivery unlocked.', '🏷️', 'success');
  } else if (code === 'WELCOME15') {
    appliedCoupon = { code: 'WELCOME15', type: 'percent', value: 15 };
    const saved = subtotal * 0.15;
    saveCoupon();
    updateCartUI();
    updateCouponUI();
    showCouponMessage(`Coupon WELCOME15 applied! You saved ${formatINR(saved)}`, 'success');
    notifyUser('Coupon Applied', `Coupon "WELCOME15" applied! You saved ${formatINR(saved)}`, '🏷️', 'success');
  } else {
    showCouponMessage('Invalid coupon code. Try SAVE10, SAVE200, FREESHIP, or WELCOME15', 'error');
    notifyUser('Invalid Coupon', 'Invalid coupon code. Try SAVE10, SAVE200, or FREESHIP', '⚠️', 'error');
  }
}

function removeCoupon() {
  appliedCoupon = null;
  saveCoupon();
  updateCartUI();
  updateCouponUI();
  showCouponMessage('Coupon removed.', 'success');
  notifyUser('Coupon Removed', 'Coupon discount removed', 'ℹ️', 'info');
}

function updateCouponUI() {
  if (appliedCoupon) {
    if (cartActiveCouponTag) cartActiveCouponTag.style.display = 'inline-flex';
    if (activeCouponName) activeCouponName.textContent = appliedCoupon.code;
    if (cartCouponInput) cartCouponInput.value = '';
  } else {
    if (cartActiveCouponTag) cartActiveCouponTag.style.display = 'none';
  }
}

function showCouponMessage(msg, type) {
  if (!cartCouponMessage) return;
  cartCouponMessage.textContent = msg;
  cartCouponMessage.className = `coupon-status-msg ${type}`;
  cartCouponMessage.style.display = 'block';

  setTimeout(() => {
    if (cartCouponMessage) cartCouponMessage.style.display = 'none';
  }, 4000);
}

// ==========================================
// 12. TOTALS & CART CALCULATION
// ==========================================
function calculateCartTotals() {
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  let deliveryFee = subtotal >= 999 || subtotal === 0 ? 0 : 49;
  let discount = 0;

  if (appliedCoupon && subtotal > 0) {
    if (appliedCoupon.type === 'percent') {
      discount = (subtotal * appliedCoupon.value) / 100;
    } else if (appliedCoupon.type === 'flat') {
      discount = Math.min(subtotal, appliedCoupon.value);
    } else if (appliedCoupon.type === 'freeship') {
      deliveryFee = 0;
    }
  }

  const codFee = selectedPaymentMethod === 'Cash on Delivery' && subtotal > 0 ? 40 : 0;
  const finalTotal = Math.max(0, subtotal - discount + deliveryFee + codFee);

  return {
    totalItemCount,
    subtotal,
    discount,
    deliveryFee,
    codFee,
    finalTotal
  };
}

function updateCartUI() {
  const totals = calculateCartTotals();

  if (cartCountBadge) cartCountBadge.textContent = totals.totalItemCount;
  if (drawerItemCount) drawerItemCount.textContent = `${totals.totalItemCount} item${totals.totalItemCount === 1 ? '' : 's'}`;

  if (cartSubtotal) cartSubtotal.textContent = formatINR(totals.subtotal);
  if (cartTotalPrice) cartTotalPrice.textContent = formatINR(totals.finalTotal);

  if (cartDiscountRow) {
    if (totals.discount > 0) {
      cartDiscountRow.style.display = 'flex';
      if (cartDiscountAmount) cartDiscountAmount.textContent = `-${formatINR(totals.discount)}`;
    } else {
      cartDiscountRow.style.display = 'none';
    }
  }

  if (cartDeliveryCharge) {
    if (totals.deliveryFee === 0) {
      cartDeliveryCharge.textContent = 'FREE';
      cartDeliveryCharge.className = 'free-shipping';
    } else {
      cartDeliveryCharge.textContent = formatINR(totals.deliveryFee);
      cartDeliveryCharge.className = '';
    }
  }

  if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;
  if (clearCartBtn) clearCartBtn.style.display = cart.length > 0 ? 'block' : 'none';

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-state">
        <div class="empty-cart-icon">🛍️</div>
        <h4>Your Shopping Bag is Empty</h4>
        <p>Discover our top-rated tech, fashion, and lifestyle essentials.</p>
        <button class="shop-now-btn" onclick="closeCartDrawer()">Start Shopping</button>
      </div>
    `;
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=80'">
      
      <div class="cart-item-info">
        <h4 class="cart-item-title" title="${item.name}">${item.name}</h4>
        <div class="cart-item-unit-price">${formatINR(item.price)} each</div>
        
        <div class="cart-item-actions">
          <div class="qty-control">
            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)" aria-label="Decrease quantity">-</button>
            <span class="qty-number">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)" aria-label="Increase quantity">+</button>
          </div>
          <span class="cart-item-subtotal">${formatINR(item.price * item.quantity)}</span>
        </div>
      </div>

      <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Remove item" aria-label="Remove item">
        &times;
      </button>
    </div>
  `).join('');
}

// ==========================================
// 13. CHECKOUT & PAYMENT WORKFLOW
// ==========================================
function openCheckoutModal() {
  if (cart.length === 0) return;
  closeCartDrawer();
  requestNotificationPermission();

  const totals = calculateCartTotals();

  notifyUser(
    'ShopEasy: Checkout Started',
    `Proceeding to checkout with ${totals.totalItemCount} item(s) • Total: ${formatINR(totals.finalTotal)}`,
    '💳',
    'info'
  );

  // Prefill customer form from profile
  if (document.getElementById('cust-name')) document.getElementById('cust-name').value = customerProfile.name;
  if (document.getElementById('cust-phone')) document.getElementById('cust-phone').value = customerProfile.phone;
  if (document.getElementById('cust-email')) document.getElementById('cust-email').value = customerProfile.email;
  if (document.getElementById('cust-address')) document.getElementById('cust-address').value = customerProfile.address;
  if (document.getElementById('cust-city')) document.getElementById('cust-city').value = customerProfile.city;
  if (document.getElementById('cust-state')) document.getElementById('cust-state').value = customerProfile.state;
  if (document.getElementById('cust-pincode')) document.getElementById('cust-pincode').value = customerProfile.pincode;

  // Step 1 Breakdown
  if (modalSubtotal) modalSubtotal.textContent = formatINR(totals.subtotal);
  if (modalDiscountRow) {
    if (totals.discount > 0) {
      modalDiscountRow.style.display = 'flex';
      if (modalDiscount) modalDiscount.textContent = `-${formatINR(totals.discount)}`;
    } else {
      modalDiscountRow.style.display = 'none';
    }
  }

  if (modalDeliveryFee) {
    modalDeliveryFee.textContent = totals.deliveryFee === 0 ? 'FREE (₹0)' : formatINR(totals.deliveryFee);
  }

  if (modalOrderTotal) modalOrderTotal.textContent = formatINR(totals.finalTotal);
  if (btnPayTotalBadge) btnPayTotalBadge.textContent = formatINR(totals.finalTotal);
  if (checkoutExpectedDate) checkoutExpectedDate.textContent = getExpectedDeliveryDate(4);

  checkoutFormStep.style.display = 'block';
  paymentSelectionStep.style.display = 'none';
  orderSuccessStep.style.display = 'none';
  if (paymentDeviceAlert) paymentDeviceAlert.style.display = 'none';
  if (codNoticeBox) codNoticeBox.style.display = 'none';

  checkoutModal.classList.add('active');
}

function closeCheckoutModal() {
  checkoutModal.classList.remove('active');
}

function handleProceedToPayment(e) {
  e.preventDefault();
  if (cart.length === 0) return;

  // Update profile from form inputs
  customerProfile.name = document.getElementById('cust-name').value;
  customerProfile.phone = document.getElementById('cust-phone').value;
  customerProfile.email = document.getElementById('cust-email').value;
  customerProfile.address = document.getElementById('cust-address').value;
  customerProfile.city = document.getElementById('cust-city').value;
  customerProfile.state = document.getElementById('cust-state').value;
  customerProfile.pincode = document.getElementById('cust-pincode').value;

  try {
    localStorage.setItem('shopeasy_profile_v2', JSON.stringify(customerProfile));
  } catch (err) {}

  updatePaymentStepUI();

  checkoutFormStep.style.display = 'none';
  paymentSelectionStep.style.display = 'block';
  orderSuccessStep.style.display = 'none';
}

function updatePaymentStepUI() {
  const totals = calculateCartTotals();

  if (paymentAmountDisplay) paymentAmountDisplay.textContent = formatINR(totals.finalTotal);
  if (paySubtotal) paySubtotal.textContent = formatINR(totals.subtotal);
  
  if (payDiscountLine) {
    if (totals.discount > 0) {
      payDiscountLine.style.display = 'flex';
      if (payDiscount) payDiscount.textContent = `-${formatINR(totals.discount)}`;
    } else {
      payDiscountLine.style.display = 'none';
    }
  }

  if (payDelivery) {
    payDelivery.textContent = totals.deliveryFee === 0 ? 'FREE' : formatINR(totals.deliveryFee);
  }

  if (payCodLine) {
    payCodLine.style.display = totals.codFee > 0 ? 'flex' : 'none';
  }

  if (payFinalTotal) payFinalTotal.textContent = formatINR(totals.finalTotal);

  if (confirmPaymentBtn) {
    if (selectedPaymentMethod === 'Cash on Delivery') {
      confirmPaymentBtn.innerHTML = `<span>Confirm Cash on Delivery (${formatINR(totals.finalTotal)})</span> <span class="btn-arrow">&rarr;</span>`;
    } else {
      confirmPaymentBtn.innerHTML = `<span>Pay ${formatINR(totals.finalTotal)} via ${selectedPaymentMethod}</span> <span class="btn-arrow">&rarr;</span>`;
    }
  }
}

function selectPaymentMethod(methodName, schemePrefix) {
  selectedPaymentMethod = methodName;

  document.querySelectorAll('.payment-option-btn').forEach(btn => {
    const isSelected = btn.getAttribute('data-method') === methodName;
    btn.classList.toggle('active-payment', isSelected);
    const radio = btn.querySelector('.payment-select-radio');
    if (radio) radio.textContent = isSelected ? '✓' : '○';
  });

  const totals = calculateCartTotals();
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const tempOrderId = `ORD-${dateStr}-${Math.floor(1000 + Math.random() * 9000)}`;

  if (methodName === 'Cash on Delivery') {
    if (codNoticeBox) codNoticeBox.style.display = 'flex';
    if (paymentDeviceAlert) paymentDeviceAlert.style.display = 'none';
    notifyUser('Payment Method', 'Cash on Delivery selected (+₹40 handling fee)', '💵', 'info');
  } else {
    if (codNoticeBox) codNoticeBox.style.display = 'none';
    notifyUser('Payment Method', `Selected payment method: ${methodName}`, '💳', 'info');

    const upiUrl = `${schemePrefix}?pa=shopeasy@upi&pn=ShopEasy%20Store&am=${totals.finalTotal}&cu=INR&tn=Order_${tempOrderId}`;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      try {
        window.location.href = upiUrl;
      } catch (e) {}
    } else {
      if (paymentDeviceAlert && deviceAlertMsg) {
        deviceAlertMsg.textContent = `Selected: ${methodName}. Payment app redirection is active on supported mobile devices. You can confirm and place your order securely below.`;
        paymentDeviceAlert.style.display = 'flex';
      }
    }
  }

  updatePaymentStepUI();
}

function finalizeOrder() {
  if (cart.length === 0) return;

  const totals = calculateCartTotals();
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const orderId = `ORD-${dateStr}-${Math.floor(1000 + Math.random() * 9000)}`;
  const orderDate = new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });
  const deliveryDate = getExpectedDeliveryDate(4);

  const newOrder = {
    orderId,
    orderDate,
    expectedDelivery: deliveryDate,
    items: [...cart],
    subtotal: totals.subtotal,
    discount: totals.discount,
    appliedCoupon: appliedCoupon ? appliedCoupon.code : null,
    deliveryFee: totals.deliveryFee,
    codFee: totals.codFee,
    totalAmount: totals.finalTotal,
    paymentMethod: selectedPaymentMethod,
    paymentStatus: selectedPaymentMethod === 'Cash on Delivery' ? 'PENDING (PAY ON DELIVERY)' : 'PAID ONLINE',
    customer: { ...customerProfile },
    trackingStatus: 'Order Placed',
    trackingStep: 1 // 1 to 6
  };

  orders.unshift(newOrder);
  try {
    localStorage.setItem('shopeasy_orders_v2', JSON.stringify(orders));
  } catch (e) {}

  // Populate Step 3 Receipt
  if (receiptOrderId) receiptOrderId.textContent = orderId;
  if (receiptDeliveryDate) receiptDeliveryDate.textContent = deliveryDate;
  if (receiptPaymentMethod) receiptPaymentMethod.textContent = selectedPaymentMethod;
  if (receiptPaymentStatus) {
    receiptPaymentStatus.textContent = newOrder.paymentStatus;
    receiptPaymentStatus.className = selectedPaymentMethod === 'Cash on Delivery' ? 'receipt-tag' : 'receipt-tag success-tag';
  }
  if (receiptDate) receiptDate.textContent = orderDate;
  if (receiptItemCount) receiptItemCount.textContent = `${totals.totalItemCount} item${totals.totalItemCount === 1 ? '' : 's'}`;
  if (receiptTotal) receiptTotal.textContent = formatINR(totals.finalTotal);

  if (receiptTrackBtn) {
    receiptTrackBtn.onclick = () => {
      closeCheckoutModal();
      openTrackingModal(orderId);
    };
  }

  // Show Step 3
  checkoutFormStep.style.display = 'none';
  paymentSelectionStep.style.display = 'none';
  orderSuccessStep.style.display = 'block';

  // Clear cart
  cart = [];
  appliedCoupon = null;
  saveCart();
  saveCoupon();
  updateCartUI();
  updateCouponUI();
  updateAccountUI();
  populateReturnOrderDropdown();

  if (selectedPaymentMethod === 'Cash on Delivery') {
    notifyUser('Order Placed', `Order #${orderId} placed with Cash on Delivery!`, '📦', 'success');
  } else {
    notifyUser('Payment Successful', `Payment Successful! Your order #${orderId} has been placed.`, '🎉', 'success');
  }
}

// ==========================================
// 14. ORDER TRACKING CONTROLLER
// ==========================================
const TRACKING_STEPS = [
  { name: "Order Placed", desc: "Order details received & registered" },
  { name: "Order Confirmed", desc: "Seller has verified and confirmed the order" },
  { name: "Packed", desc: "Package securely packed at fulfillment centre" },
  { name: "Shipped", desc: "In transit with Express Surface Logistics" },
  { name: "Out for Delivery", desc: "Courier partner is out to deliver your package" },
  { name: "Delivered", desc: "Package delivered to the customer" }
];

function openTrackingModal(defaultOrderId = null) {
  if (defaultOrderId) {
    if (trackingOrderInput) trackingOrderInput.value = defaultOrderId;
    lookupOrderTracking(defaultOrderId);
  } else if (orders.length > 0 && (!trackingOrderInput || !trackingOrderInput.value)) {
    trackingOrderInput.value = orders[0].orderId;
    lookupOrderTracking(orders[0].orderId);
  }

  trackingModal.classList.add('active');
}

function closeTrackingModal() {
  trackingModal.classList.remove('active');
}

function lookupOrderTracking(orderIdQuery) {
  const query = (orderIdQuery || (trackingOrderInput ? trackingOrderInput.value : '')).trim().toUpperCase();

  if (!query) {
    trackingResultsContainer.innerHTML = `
      <div class="empty-tracking-state">
        <p>Please enter a valid Order ID (e.g. ORD-20260901-1234).</p>
      </div>
    `;
    return;
  }

  const foundOrder = orders.find(o => o.orderId.toUpperCase() === query);

  if (!foundOrder) {
    trackingResultsContainer.innerHTML = `
      <div class="empty-tracking-state">
        <div class="empty-cart-icon">⚠️</div>
        <h4>Order Not Found</h4>
        <p>No active order found with ID <strong>${query}</strong>. Please check your Order ID.</p>
      </div>
    `;
    return;
  }

  renderTrackingCard(foundOrder);
}

function renderTrackingCard(order) {
  const currentStep = order.trackingStep || 1;

  trackingResultsContainer.innerHTML = `
    <div class="tracking-card">
      <div class="tracking-card-header">
        <div class="tracking-order-title">
          <h4>Order ${order.orderId}</h4>
          <p>Placed on ${order.orderDate} • Total: ${formatINR(order.totalAmount)}</p>
        </div>
        <span class="tracking-status-pill">${order.trackingStatus}</span>
      </div>

      <div class="expected-delivery-notice" style="margin-bottom: 1.25rem;">
        <span class="delivery-icon">🚚</span>
        <div>
          <strong>Expected Delivery Date</strong>
          <p class="delivery-date-text">${order.expectedDelivery}</p>
        </div>
      </div>

      <!-- Visual Timeline -->
      <div class="tracking-timeline">
        ${TRACKING_STEPS.map((step, idx) => {
          const stepNum = idx + 1;
          let stepClass = '';
          let nodeIcon = stepNum;

          if (stepNum < currentStep) {
            stepClass = 'completed';
            nodeIcon = '✓';
          } else if (stepNum === currentStep) {
            stepClass = 'current';
            nodeIcon = '●';
          }

          return `
            <div class="timeline-step ${stepClass}">
              <div class="step-node">${nodeIcon}</div>
              <div class="step-content">
                <strong>${step.name}</strong>
                <p>${step.desc}</p>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Items inside Order -->
      <div style="margin-top: 1.25rem; padding-top: 0.85rem; border-top: 1px solid var(--border-color);">
        <strong style="font-size: 0.85rem; color: var(--text-main);">Items in this shipment:</strong>
        <div style="margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.4rem;">
          ${order.items.map(item => `
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; color: var(--text-muted);">
              <span>${item.name} &times; ${item.quantity}</span>
              <strong>${formatINR(item.price * item.quantity)}</strong>
            </div>
          `).join('')}
        </div>
      </div>

      <button class="advance-tracking-btn" onclick="advanceOrderStatus('${order.orderId}')">
        ⚡ Advance Tracking Status (Simulate Next Milestone)
      </button>
    </div>
  `;
}

function advanceOrderStatus(orderId) {
  const order = orders.find(o => o.orderId === orderId);
  if (!order) return;

  if (order.trackingStep < TRACKING_STEPS.length) {
    order.trackingStep += 1;
    order.trackingStatus = TRACKING_STEPS[order.trackingStep - 1].name;
    try {
      localStorage.setItem('shopeasy_orders_v2', JSON.stringify(orders));
    } catch (e) {}
    renderTrackingCard(order);
    notifyUser('Shipment Updated', `Order #${order.orderId} milestone: ${order.trackingStatus}`, '🚚', 'info');
  } else {
    notifyUser('Shipment Delivered', `Order #${order.orderId} has been successfully delivered!`, '✅', 'success');
  }
}

// ==========================================
// 15. MY ORDERS CONTROLLER
// ==========================================
function openOrdersModal() {
  renderOrdersModal();
  ordersModal.classList.add('active');
}

function closeOrdersModal() {
  ordersModal.classList.remove('active');
}

function renderOrdersModal() {
  if (!ordersListContainer) return;

  if (orders.length === 0) {
    ordersListContainer.innerHTML = `
      <div class="empty-cart-state" style="padding: 2rem 1rem;">
        <div class="empty-cart-icon">📋</div>
        <h4>No Orders Placed Yet</h4>
        <p>Your previous orders and invoices will appear here once placed.</p>
        <button class="shop-now-btn" onclick="closeOrdersModal()">Start Shopping</button>
      </div>
    `;
    return;
  }

  ordersListContainer.innerHTML = orders.map(order => `
    <div class="order-history-card">
      <div class="order-history-header">
        <div>
          <h4>${order.orderId}</h4>
          <span style="font-size: 0.78rem; color: var(--text-muted);">Placed on ${order.orderDate}</span>
        </div>
        <span class="receipt-tag ${order.trackingStatus === 'Delivered' ? 'success-tag' : ''}">${order.trackingStatus}</span>
      </div>

      <div class="order-history-items-row">
        ${order.items.map(item => `
          <img src="${item.image}" alt="${item.name}" title="${item.name} (${item.quantity})" class="order-thumb-img" onerror="this.src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=80'">
        `).join('')}
      </div>

      <div class="order-history-footer">
        <div>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Expected Delivery: <strong>${order.expectedDelivery}</strong></span>
          <div class="order-total-highlight">${formatINR(order.totalAmount)}</div>
        </div>

        <div class="order-actions-btns">
          <button class="btn-small-track" onclick="closeOrdersModal(); openTrackingModal('${order.orderId}')">
            📍 Track Order
          </button>
          <button class="btn-small-return" onclick="closeOrdersModal(); openReturnModal('${order.orderId}')">
            🔄 Return Item
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 16. PRODUCT RETURN REQUESTS CONTROLLER
// ==========================================
function openReturnModal(preselectedOrderId = null) {
  populateReturnOrderDropdown(preselectedOrderId);
  returnFormStep.style.display = 'block';
  returnSuccessStep.style.display = 'none';
  returnModal.classList.add('active');
}

function closeReturnModal() {
  returnModal.classList.remove('active');
}

function populateReturnOrderDropdown(preselectedOrderId = null) {
  if (!returnOrderSelect) return;

  if (orders.length === 0) {
    returnOrderSelect.innerHTML = '<option value="">-- No Orders Placed Yet --</option>';
    if (returnProductSelect) {
      returnProductSelect.innerHTML = '<option value="">-- No Items Available --</option>';
      returnProductSelect.disabled = true;
    }
    return;
  }

  returnOrderSelect.innerHTML = `
    <option value="">-- Select Completed Order --</option>
    ${orders.map(o => `
      <option value="${o.orderId}" ${preselectedOrderId === o.orderId ? 'selected' : ''}>
        ${o.orderId} (Placed on ${o.orderDate} • ${formatINR(o.totalAmount)})
      </option>
    `).join('')}
  `;

  if (preselectedOrderId) {
    handleReturnOrderSelected();
  }
}

function handleReturnOrderSelected() {
  const selectedOrderId = returnOrderSelect.value;
  if (!selectedOrderId) {
    returnProductSelect.innerHTML = '<option value="">-- First select an order --</option>';
    returnProductSelect.disabled = true;
    return;
  }

  const order = orders.find(o => o.orderId === selectedOrderId);
  if (!order || order.items.length === 0) {
    returnProductSelect.innerHTML = '<option value="">-- No items in this order --</option>';
    returnProductSelect.disabled = true;
    return;
  }

  returnProductSelect.disabled = false;
  returnProductSelect.innerHTML = `
    <option value="">-- Choose Item to Return --</option>
    ${order.items.map(item => `
      <option value="${item.id}" data-name="${item.name}" data-price="${item.price}">
        ${item.name} (${formatINR(item.price)})
      </option>
    `).join('')}
  `;
}

function handleReturnFormSubmit(e) {
  e.preventDefault();

  const orderId = returnOrderSelect.value;
  const productId = returnProductSelect.value;
  const reason = returnReasonSelect.value;
  const comments = returnComments ? returnComments.value : '';
  const refundMode = returnRefundMode ? returnRefundMode.value : 'Original Payment Method';

  if (!orderId || !productId || !reason) {
    notifyUser('Return Error', 'Please select an order, item, and return reason.', '⚠️', 'error');
    return;
  }

  const order = orders.find(o => o.orderId === orderId);
  const product = order ? order.items.find(i => String(i.id) === String(productId)) : null;
  const returnId = 'RET-' + Math.floor(100000 + Math.random() * 900000);

  const returnReq = {
    returnId,
    orderId,
    productName: product ? product.name : 'Selected Product',
    refundAmount: product ? product.price : 0,
    reason,
    comments,
    refundMode,
    status: 'Requested',
    createdAt: new Date().toLocaleString('en-IN')
  };

  returnRequests.unshift(returnReq);
  try {
    localStorage.setItem('shopeasy_returns_v2', JSON.stringify(returnRequests));
  } catch (err) {}

  if (receiptReturnId) receiptReturnId.textContent = returnId;
  if (receiptReturnOrderId) receiptReturnOrderId.textContent = orderId;
  if (receiptReturnItem) receiptReturnItem.textContent = returnReq.productName;
  if (receiptReturnReason) receiptReturnReason.textContent = reason;
  if (receiptReturnAmount) receiptReturnAmount.textContent = formatINR(returnReq.refundAmount);

  returnFormStep.style.display = 'none';
  returnSuccessStep.style.display = 'block';

  updateAccountUI();

  notifyUser(
    'Return Submitted',
    `Return request submitted successfully. Request ID: ${returnId}`,
    '🔄',
    'success'
  );
}

// ==========================================
// 17. CUSTOMER ACCOUNT & PROFILE
// ==========================================
function openAccountModal() {
  updateAccountUI();
  accountModal.classList.add('active');
}

function closeAccountModal() {
  accountModal.classList.remove('active');
}

function updateAccountUI() {
  const accDisplayName = document.getElementById('acc-display-name');
  const accDisplayPhone = document.getElementById('acc-display-phone');
  const accDisplayEmail = document.getElementById('acc-display-email');
  const accOrdersCount = document.getElementById('acc-orders-count');
  const accWishlistCount = document.getElementById('acc-wishlist-count');
  const accReturnsCount = document.getElementById('acc-returns-count');

  if (accDisplayName) accDisplayName.textContent = customerProfile.name;
  if (accDisplayPhone) accDisplayPhone.textContent = `+91 ${customerProfile.phone}`;
  if (accDisplayEmail) accDisplayEmail.textContent = customerProfile.email;

  if (accOrdersCount) accOrdersCount.textContent = orders.length;
  if (accWishlistCount) accWishlistCount.textContent = wishlist.length;
  if (accReturnsCount) accReturnsCount.textContent = returnRequests.length;

  if (document.getElementById('acc-name')) document.getElementById('acc-name').value = customerProfile.name;
  if (document.getElementById('acc-phone')) document.getElementById('acc-phone').value = customerProfile.phone;
  if (document.getElementById('acc-address')) document.getElementById('acc-address').value = customerProfile.address;
  if (document.getElementById('acc-city')) document.getElementById('acc-city').value = customerProfile.city;
  if (document.getElementById('acc-state')) document.getElementById('acc-state').value = customerProfile.state;
  if (document.getElementById('acc-pincode')) document.getElementById('acc-pincode').value = customerProfile.pincode;
}

function handleSaveAddress(e) {
  e.preventDefault();

  customerProfile.name = document.getElementById('acc-name').value;
  customerProfile.phone = document.getElementById('acc-phone').value;
  customerProfile.address = document.getElementById('acc-address').value;
  customerProfile.city = document.getElementById('acc-city').value;
  customerProfile.state = document.getElementById('acc-state').value;
  customerProfile.pincode = document.getElementById('acc-pincode').value;

  try {
    localStorage.setItem('shopeasy_profile_v2', JSON.stringify(customerProfile));
  } catch (err) {}

  updateAccountUI();
  notifyUser('Account Updated', 'Delivery address saved successfully!', '👤', 'success');
}

// ==========================================
// 18. ADMIN DASHBOARD (FRONTEND-ONLY)
// ==========================================
function openAdminModal() {
  renderAdminDashboard();
  adminModal.classList.add('active');
}

function closeAdminModal() {
  adminModal.classList.remove('active');
}

function renderAdminDashboard() {
  const totalRevenue = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);

  if (adminTotalSales) adminTotalSales.textContent = formatINR(totalRevenue);
  if (adminTotalOrders) adminTotalOrders.textContent = orders.length;
  if (adminTotalProducts) adminTotalProducts.textContent = productsList.length;
  if (adminTotalReturns) adminTotalReturns.textContent = returnRequests.length;

  // Orders Table
  if (adminOrdersTbody) {
    if (orders.length === 0) {
      adminOrdersTbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: var(--text-muted);">No orders placed yet.</td></tr>';
    } else {
      adminOrdersTbody.innerHTML = orders.map(o => `
        <tr>
          <td><strong>${o.orderId}</strong></td>
          <td>${o.customer.name || 'Customer'}</td>
          <td>${formatINR(o.totalAmount)}</td>
          <td><span class="receipt-tag">${o.paymentMethod}</span></td>
          <td><span class="receipt-tag ${o.trackingStatus === 'Delivered' ? 'success-tag' : ''}">${o.trackingStatus}</span></td>
          <td>
            <button class="btn-small-track" onclick="advanceOrderStatus('${o.orderId}'); renderAdminDashboard();">Advance</button>
          </td>
        </tr>
      `).join('');
    }
  }

  // Products Table
  if (adminProductsTbody) {
    adminProductsTbody.innerHTML = productsList.map(p => `
      <tr>
        <td>#${p.id}</td>
        <td><strong>${p.name}</strong></td>
        <td>${p.category}</td>
        <td>${formatINR(p.price)}</td>
        <td><span class="receipt-tag ${p.stockQuantity <= 5 ? 'warning-tag' : 'success-tag'}">${p.stock}</span></td>
      </tr>
    `).join('');
  }

  // Returns Table
  if (adminReturnsTbody) {
    if (returnRequests.length === 0) {
      adminReturnsTbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: var(--text-muted);">No return requests filed yet.</td></tr>';
    } else {
      adminReturnsTbody.innerHTML = returnRequests.map(r => `
        <tr>
          <td><strong>${r.returnId}</strong></td>
          <td>${r.orderId}</td>
          <td>${r.productName}</td>
          <td>${r.reason}</td>
          <td>${formatINR(r.refundAmount)}</td>
          <td><span class="receipt-tag warning-tag">${r.status}</span></td>
        </tr>
      `).join('');
    }
  }
}

// ==========================================
// 19. DRAWER & MODAL TOGGLES
// ==========================================
function openCartDrawer() {
  cartDrawer.classList.add('open');
  cartDrawerOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  cartDrawer.classList.remove('open');
  cartDrawerOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// 20. EVENT LISTENERS ATTACHMENT
// ==========================================
function setupEventListeners() {
  // Theme Toggle
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);

  // Cart Drawer
  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', closeCartDrawer);
  if (clearCartBtn) clearCartBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear your shopping bag?')) clearCart();
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearSearchBtn) clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
      renderProducts();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      clearSearchBtn.style.display = 'none';
      renderProducts();
    });
  }

  // Sorting dropdown
  if (catalogSortSelect) {
    catalogSortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Category Filters
  if (categoryFilters) {
    categoryFilters.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-pill')) {
        const cat = e.target.getAttribute('data-category');
        filterByCategory(cat);
      }
    });
  }

  // Coupons
  if (cartApplyCouponBtn) cartApplyCouponBtn.addEventListener('click', () => applyCoupon());
  if (cartCouponInput) {
    cartCouponInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyCoupon();
      }
    });
  }
  if (cartRemoveCouponBtn) cartRemoveCouponBtn.addEventListener('click', removeCoupon);

  // Wishlist Modal
  if (wishlistToggleBtn) wishlistToggleBtn.addEventListener('click', openWishlistModal);
  if (navWishlistLink) navWishlistLink.addEventListener('click', openWishlistModal);
  if (closeWishlistModalBtn) closeWishlistModalBtn.addEventListener('click', closeWishlistModal);
  if (wishlistModal) {
    wishlistModal.addEventListener('click', (e) => {
      if (e.target === wishlistModal) closeWishlistModal();
    });
  }

  // Orders Modal
  if (navOrdersLink) navOrdersLink.addEventListener('click', openOrdersModal);
  if (closeOrdersModalBtn) closeOrdersModalBtn.addEventListener('click', closeOrdersModal);
  if (ordersModal) {
    ordersModal.addEventListener('click', (e) => {
      if (e.target === ordersModal) closeOrdersModal();
    });
  }

  // Account Modal
  if (accountToggleBtn) accountToggleBtn.addEventListener('click', openAccountModal);
  if (navAccountBtnTop) navAccountBtnTop.addEventListener('click', openAccountModal);
  if (closeAccountModalBtn) closeAccountModalBtn.addEventListener('click', closeAccountModal);
  if (accountModal) {
    accountModal.addEventListener('click', (e) => {
      if (e.target === accountModal) closeAccountModal();
    });
  }
  if (saveAddressForm) saveAddressForm.addEventListener('submit', handleSaveAddress);

  // Admin Dashboard Modal
  if (navAdminBtnTop) navAdminBtnTop.addEventListener('click', openAdminModal);
  if (closeAdminModalBtn) closeAdminModalBtn.addEventListener('click', closeAdminModal);
  if (adminModal) {
    adminModal.addEventListener('click', (e) => {
      if (e.target === adminModal) closeAdminModal();
    });
  }

  // Admin Tabs
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');
      const tabContent = document.getElementById(tabId);
      if (tabContent) tabContent.classList.add('active');
    });
  });

  // Checkout Modal
  if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckoutModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeCheckoutModal);
  if (checkoutModal) {
    checkoutModal.addEventListener('click', (e) => {
      if (e.target === checkoutModal) closeCheckoutModal();
    });
  }

  if (checkoutForm) checkoutForm.addEventListener('submit', handleProceedToPayment);

  // Payment Options
  document.querySelectorAll('.payment-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const method = btn.getAttribute('data-method');
      const scheme = btn.getAttribute('data-scheme') || 'upi://pay';
      selectPaymentMethod(method, scheme);
    });
  });

  if (confirmPaymentBtn) confirmPaymentBtn.addEventListener('click', finalizeOrder);

  if (backToDetailsBtn) {
    backToDetailsBtn.addEventListener('click', () => {
      paymentSelectionStep.style.display = 'none';
      checkoutFormStep.style.display = 'block';
    });
  }

  if (continueShoppingBtn) {
    continueShoppingBtn.addEventListener('click', closeCheckoutModal);
  }

  // Tracking Modal
  if (navTrackLink) navTrackLink.addEventListener('click', () => openTrackingModal());
  if (navTrackBtnTop) navTrackBtnTop.addEventListener('click', () => openTrackingModal());
  if (closeTrackingModalBtn) closeTrackingModalBtn.addEventListener('click', closeTrackingModal);
  if (trackingModal) {
    trackingModal.addEventListener('click', (e) => {
      if (e.target === trackingModal) closeTrackingModal();
    });
  }
  if (trackingLookupBtn) {
    trackingLookupBtn.addEventListener('click', () => lookupOrderTracking());
  }
  if (trackingOrderInput) {
    trackingOrderInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        lookupOrderTracking();
      }
    });
  }

  // Returns Modal
  if (navReturnLink) navReturnLink.addEventListener('click', () => openReturnModal());
  if (navReturnBtnTop) navReturnBtnTop.addEventListener('click', () => openReturnModal());
  if (closeReturnModalBtn) closeReturnModalBtn.addEventListener('click', closeReturnModal);
  if (returnModal) {
    returnModal.addEventListener('click', (e) => {
      if (e.target === returnModal) closeReturnModal();
    });
  }
  if (returnOrderSelect) returnOrderSelect.addEventListener('change', handleReturnOrderSelected);
  if (returnForm) returnForm.addEventListener('submit', handleReturnFormSubmit);
  if (closeReturnSuccessBtn) closeReturnSuccessBtn.addEventListener('click', closeReturnModal);

  // Global ESC Key Listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeCheckoutModal();
      closeTrackingModal();
      closeReturnModal();
      closeWishlistModal();
      closeOrdersModal();
      closeAccountModal();
      closeAdminModal();
    }
  });
}
