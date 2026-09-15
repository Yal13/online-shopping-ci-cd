# ShopEasy - Modern E-Commerce Platform

A feature-rich, responsive, and professional e-commerce web application built with vanilla **HTML5**, modern **CSS3**, **JavaScript (ES6+)**, and a lightweight **Node.js Express** backend API.

---

## ⚡ Quick Start (Zero Server / No Setup Required)

This application is **100% self-contained** and can be run immediately on any computer with **zero installations** and **no administrator permissions**:

1. Open your File Explorer.
2. Navigate to the `frontend/` directory:
   ```text
   c:\Users\Student\Desktop\online shopping\frontend
   ```
3. **Double-click `index.html`** (or right-click -> *Open with* -> Google Chrome / Microsoft Edge / Firefox).
4. The entire shopping platform is immediately active with search, sorting, cart, wishlist, coupons, payments, order tracking, returns, account management, and admin dashboard!

---

## 🚀 Running the Optional Express Backend

If you have Node.js installed, you can also run the full REST API server:

```bash
# 1. Navigate to the backend directory
cd backend

# 2. Install dependencies
npm install

# 3. Run automated tests
npm test

# 4. Start the server
npm start
```
The server will start on `http://localhost:5000` with `/api/health`, `/api/products`, and `/api/checkout` endpoints.

---

## 🌟 Implemented Features

### 1. 🏠 Homepage & Navigation
- Sticky top navigation bar with brand logo, live search bar, quick navigation links (Home, Products, Categories, My Orders, Wishlist, Track, Returns), dark/light mode toggle, and shopping cart counter.
- Hero banner with coupon promo highlights (`SAVE10`, `SAVE200`, `WELCOME15`, `FREESHIP`) and one-click copy & apply.
- Popular categories grid (*Electronics, Smartphones & Accessories, Wearables, Fashion, Home & Lifestyle, Personal & Travel*).
- Special offers banner with instant category filtering.

### 2. 🛍️ Product Catalog & Indian Rupee (₹) Pricing (58 Products)
- 58 diverse, realistic products across 6 main categories with realistic Indian market pricing.
- Product cards display: Original price strikethrough, Discount %, Star rating with review counts, Stock availability (`🟢 In Stock` / `🟠 Only X left` / `🔴 Out of Stock`), dynamic delivery estimates, **Add to Bag**, **⚡ Buy Now**, and **❤️ Wishlist** buttons.
- Catalog Sorting: *✨ Featured & Popular*, *💰 Price: Low to High*, *💎 Price: High to Low*, *★ Highest Rated*, *🔥 Newest Arrivals*, and *🏷️ Biggest Discount*.

### 3. 🔍 Real-Time Search & Category Filters
- Live search input matching product names, categories, and descriptions with clear button.
- Instant category filter pills (*All Items, Electronics, Smartphones & Accessories, Wearables, Fashion, Home & Lifestyle, Personal & Travel*).

### 4. ❤️ Wishlist Management
- Save and remove products from wishlist.
- Wishlist modal with "Move to Bag" and "Remove" actions.
- Persistent wishlist state stored in `localStorage`.

### 5. 🛒 Shopping Bag & Smart Coupons
- Slide-out shopping bag drawer with quantity modifiers (`+` / `-`), item removal, and subtotal calculation.
- Coupon code support:
  - `SAVE10` → 10% discount on cart subtotal
  - `SAVE200` → Flat ₹200 discount (min ₹500 subtotal)
  - `FREESHIP` → Free delivery (waives ₹49 delivery charge)
  - `WELCOME15` → 15% discount
- Active coupon badge with quick removal (`✕`) and live recalculation.
- Free delivery on orders over ₹999.

### 6. 💳 Multi-Method Checkout & Payments
- Customer delivery details form with saved profile prefill (Name, Mobile, Email, Address, City, State, PIN code).
- Payment methods: **Google Pay**, **PhonePe**, **Paytm**, **Any UPI App**, and **Cash on Delivery (COD)**.
- Cash on Delivery adds a ₹40 handling charge and displays clear confirmation notices.
- Online UPI options support mobile deep linking (`upi://pay`) and provide device-aware guidance on desktop.

### 7. 🚚 Dynamic Expected Delivery Date & Order Placement
- Generates dynamic expected delivery date (3-5 days from the current date, e.g. *5 September 2026*).
- Generates unique Order ID format: `ORD-YYYYMMDD-XXXX` (e.g. `ORD-20260901-4819`).
- Displays itemized order confirmation receipt with direct "Track Order" button.

### 8. 📍 6-Stage Visual Order Tracking
- Shipment progress timeline:
  `Order Placed` &rarr; `Order Confirmed` &rarr; `Packed` &rarr; `Shipped` &rarr; `Out for Delivery` &rarr; `Delivered`.
- Real-time Order ID lookup with status milestones, estimated delivery date, and milestone advance controls.

### 9. 📋 My Orders & Product Return System
- View previous orders with item thumbnails, payment modes, and delivery statuses.
- Doorstep product return workflow with return reason dropdown (*Product defective/damaged, Wrong product received, Product missing parts, Product not as described, Size issue, Other*).
- Generates Return ID (`RET-XXXXXX`) and displays 5-stage return timeline (`Return Requested` &rarr; `Under Review` &rarr; `Approved` &rarr; `Pickup Scheduled` &rarr; `Refund / Replacement`).

### 10. 👤 Customer Account Management
- Customer profile with saved delivery addresses.
- Profile stats: Orders Placed, Saved Wishlist, Active Returns.

### 11. 📊 Store Admin Dashboard (Frontend-Only)
- Key business metrics: Total Sales Revenue (₹), Total Orders, Active Catalog Items, Return Requests.
- Tabbed management tables for Recent Orders, Inventory, and Returns with status controls.

### 12. 🌓 Dark / Light Mode
- Theme toggle button in navigation header.
- High-contrast dark mode palette saved in `localStorage`.

### 13. 🔔 Notifications
- Color-coded animated Toast alerts (Green for success, Red for error, Blue for info) + Web Push Notification API integration.

---

## 🔄 CI/CD Pipeline

The project features an automated **Continuous Integration (CI)** and **Continuous Deployment (CD)** pipeline using **GitHub Actions**.

### 🏗️ Architecture Flow

```text
Developer
    ↓
   Git
    ↓
  GitHub (Yal13/online-shopping-ci-cd)
    ↓
GitHub Actions
    ↓
   CI
    ↓
 Install (npm ci)
    ↓
Validate (Syntax & Schema Checks)
    ↓
  Test (Node Native Test Runner)
    ↓
Build / Package (Static Assets & Backend)
    ↓
   CD
    ↓
Deployment (Production / Staging)
```

---

### ⚙️ When CI Runs
- **On Push**: Every commit pushed to the `main` branch.
- **On Pull Request**: Every pull request targeting the `main` branch.

### 🧪 What CI Checks
1. **1. Checkout repository**: Pulls the latest code using `actions/checkout@v4`.
2. **2. Setup Node.js**: Sets up Node.js v20 runtime using `actions/setup-node@v4`.
3. **3. Install backend dependencies**: Runs `npm ci` (or `npm install`) to ensure all dependencies install cleanly.
4. **4. Validate backend**:
   - Performs syntax validation on `backend/server.js` (`node -c backend/server.js`).
   - Validates the product dataset schema in `backend/data/products.json` (verifies 50+ products, non-empty names, positive prices, and valid categories).
5. **5. Run backend tests**: Executes native automated tests via `npm test` (`node --test`), verifying `/api/health`, `/api/products`, `/api/checkout`, and frontend file existence.
6. **6. Validate frontend**: Verifies presence and structure of `frontend/index.html`, `frontend/style.css`, and `frontend/app.js`.
7. **7. Validate JavaScript**: Compiles and syntax-checks `frontend/app.js` (`node -c frontend/app.js`).
8. **8. Final project check**: Verifies overall repository integrity and signals successful CI completion.

> [!NOTE]
> All CI steps have strict error handling — no errors are hidden with `|| true`. If any step fails, the entire workflow fails immediately.

---

### 📊 How to See CI Results on GitHub
1. Go to your GitHub repository: `https://github.com/Yal13/online-shopping-ci-cd`.
2. Click on the **Actions** tab at the top of the repository.
3. You will see the **Continuous Integration** workflow runs for every commit and pull request.
4. Click on any run to inspect detailed step-by-step logs and test output.

---

### 🚀 Continuous Deployment (CD) Setup
The project includes `.github/workflows/cd.yml` configured for future cloud/server deployments:
- **Trigger**: Configured with `workflow_dispatch` for manual control or automated execution upon release.
- **Packaging**: Automatically packages `backend/`, `frontend/`, and configuration files into `release-pkg/`.
- **Required GitHub Secrets** (to be configured in *GitHub Settings -> Secrets and variables -> Actions*):
  - `PRODUCTION_SERVER_HOST`: The IP address or hostname of your production server.
  - `DEPLOY_SSH_KEY`: The private SSH key for secure server access.
  - `PRODUCTION_DEPLOY_PATH`: The target directory on your remote server (e.g. `/var/www/shopeasy`).

---

## 🔒 Security & Safety Best Practices
- **No Secrets in Git**: `.gitignore` is configured to prevent committing `.env`, `.env.local`, credentials, API keys, or log files.
- **Safe UPI Deep Linking**: Payment options use device-aware `upi://pay` URI schemes. No banking credentials, passwords, or card numbers are collected or stored.
- **Client-Side Simulation**: Order tracking and return timelines run safely in `localStorage` without external exposure.

---

## 📂 Project Directory Structure

```text
online shopping/
├── .github/
│   └── workflows/
│       ├── ci.yml                # Automated Continuous Integration pipeline
│       └── cd.yml                # Continuous Deployment workflow template
├── backend/
│   ├── data/
│   │   └── products.json         # 58-product catalog dataset (₹ INR)
│   ├── test/
│   │   └── server.test.js        # Automated API & data integrity tests
│   ├── package.json              # Backend dependencies & test scripts
│   └── server.js                 # Express REST API backend
├── frontend/
│   ├── app.js                    # Core logic: Search, Sorting, Wishlist, Cart, Checkout, Tracking
│   ├── index.html                # Modern e-commerce layout & modals
│   └── style.css                 # Responsive CSS styling with Light/Dark mode
├── .gitignore                    # Secure Git ignore rules
└── README.md                     # Documentation & CI/CD guide
```

---

## 📄 License
Developed for commercial demonstration and e-commerce portfolio use. All rights reserved.
