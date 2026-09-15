/**
 * Automated Unit & Integration Tests for ShopEasy
 * Uses Node.js built-in test runner (node:test) and assert (node:assert)
 */

const { describe, it, before, after } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const http = require('http');
const app = require('../server');

describe('ShopEasy Backend API & Data Integrity Tests', () => {
  let server;
  let baseUrl;

  before(async () => {
    // Start ephemeral server on an available random port
    await new Promise((resolve) => {
      server = http.createServer(app).listen(0, '127.0.0.1', () => {
        const port = server.address().port;
        baseUrl = `http://127.0.0.1:${port}`;
        resolve();
      });
    });
  });

  after(async () => {
    // Gracefully shut down ephemeral server
    if (server) {
      await new Promise((resolve) => server.close(resolve));
    }
  });

  // 1. Dataset Integrity Tests
  describe('Product Catalog Dataset', () => {
    it('should have a valid products.json file with at least 50 products', () => {
      const filePath = path.join(__dirname, '../data/products.json');
      assert.ok(fs.existsSync(filePath), 'products.json file must exist');

      const rawData = fs.readFileSync(filePath, 'utf8');
      const products = JSON.parse(rawData);

      assert.ok(Array.isArray(products), 'products must be an array');
      assert.ok(products.length >= 50, `Expected at least 50 products, found ${products.length}`);
    });

    it('should validate every product schema and properties', () => {
      const filePath = path.join(__dirname, '../data/products.json');
      const products = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      const seenIds = new Set();
      const validCategories = [
        'Electronics',
        'Smartphones & Accessories',
        'Wearables',
        'Fashion',
        'Home & Lifestyle',
        'Personal & Travel'
      ];

      products.forEach((p, idx) => {
        assert.ok(typeof p.id === 'number', `Product #${idx} must have numeric id`);
        assert.ok(!seenIds.has(p.id), `Duplicate product ID found: ${p.id}`);
        seenIds.add(p.id);

        assert.ok(typeof p.name === 'string' && p.name.trim().length > 0, `Product #${p.id} must have a non-empty name`);
        assert.ok(validCategories.includes(p.category), `Product #${p.id} has invalid category: ${p.category}`);
        assert.ok(typeof p.price === 'number' && p.price > 0, `Product #${p.id} must have a positive price`);
        assert.ok(typeof p.description === 'string' && p.description.length > 0, `Product #${p.id} must have description`);
        assert.ok(typeof p.rating === 'number' && p.rating >= 1 && p.rating <= 5, `Product #${p.id} must have rating 1-5`);
        assert.ok(typeof p.reviewsCount === 'number' && p.reviewsCount >= 0, `Product #${p.id} must have reviews count`);
        assert.ok(typeof p.stock === 'string', `Product #${p.id} must have stock string`);
      });
    });
  });

  // 2. Health Endpoint Test
  describe('GET /api/health', () => {
    it('should return HTTP 200 with status UP', async () => {
      const res = await fetch(`${baseUrl}/api/health`);
      assert.strictEqual(res.status, 200);

      const data = await res.json();
      assert.strictEqual(data.status, 'UP');
      assert.ok(data.timestamp, 'timestamp must be present');
      assert.ok(data.uptime, 'uptime must be present');
    });
  });

  // 3. Products Endpoint Test
  describe('GET /api/products', () => {
    it('should return all products in JSON format', async () => {
      const res = await fetch(`${baseUrl}/api/products`);
      assert.strictEqual(res.status, 200);

      const products = await res.json();
      assert.ok(Array.isArray(products), 'Response must be an array');
      assert.ok(products.length >= 50, 'Must return full product catalog');
      assert.strictEqual(products[0].id, 1);
    });
  });

  // 4. Checkout Endpoint Tests
  describe('POST /api/checkout', () => {
    it('should successfully process checkout with valid items', async () => {
      const payload = {
        items: [
          { id: 1, name: 'Wireless Headphones', price: 1499, quantity: 1 },
          { id: 4, name: 'Laptop Backpack', price: 999, quantity: 2 }
        ],
        totalAmount: 3497
      };

      const res = await fetch(`${baseUrl}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      assert.strictEqual(res.status, 200);
      const data = await res.json();
      assert.strictEqual(data.success, true);
      assert.ok(data.order, 'order object must be present');
      assert.ok(data.order.orderId.startsWith('ORD-'), 'orderId must start with ORD-');
      assert.strictEqual(data.order.itemCount, 3);
    });

    it('should reject checkout when cart items are missing or empty', async () => {
      const res = await fetch(`${baseUrl}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: [] })
      });

      assert.strictEqual(res.status, 400);
      const data = await res.json();
      assert.strictEqual(data.success, false);
      assert.ok(data.message.includes('Cart is empty'));
    });
  });

  // 5. Frontend Asset Verification Tests
  describe('Frontend Static Asset Verification', () => {
    it('should verify index.html exists and contains key UI elements', () => {
      const indexPath = path.join(__dirname, '../../frontend/index.html');
      assert.ok(fs.existsSync(indexPath), 'frontend/index.html must exist');

      const content = fs.readFileSync(indexPath, 'utf8');
      assert.ok(content.includes('id="products-grid"'), 'Must contain products-grid');
      assert.ok(content.includes('id="cart-drawer"'), 'Must contain cart-drawer');
      assert.ok(content.includes('id="checkout-modal"'), 'Must contain checkout-modal');
      assert.ok(content.includes('id="tracking-modal"'), 'Must contain tracking-modal');
    });

    it('should verify style.css exists and is non-empty', () => {
      const cssPath = path.join(__dirname, '../../frontend/style.css');
      assert.ok(fs.existsSync(cssPath), 'frontend/style.css must exist');
      const stats = fs.statSync(cssPath);
      assert.ok(stats.size > 1000, 'style.css must have content');
    });

    it('should verify app.js exists and is non-empty', () => {
      const jsPath = path.join(__dirname, '../../frontend/app.js');
      assert.ok(fs.existsSync(jsPath), 'frontend/app.js must exist');
      const stats = fs.statSync(jsPath);
      assert.ok(stats.size > 1000, 'app.js must have content');
    });
  });
});
