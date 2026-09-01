/**
 * Online Shopping - Express Backend Server
 * Simple, beginner-friendly REST API for College IBM Project
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const products = require('./data/products.json');

const app = express();
const PORT = process.env.PORT || 5000;

// ==========================================
// Middleware
// ==========================================
// Enable Cross-Origin Resource Sharing so frontend can call API from any port/file
app.use(cors());

// Parse incoming JSON payloads in request body
app.use(express.json());

// Serve static frontend files when accessing the backend directly
app.use(express.static(path.join(__dirname, '../frontend')));

// ==========================================
// API Routes
// ==========================================

/**
 * @route   GET /api/health
 * @desc    Health check endpoint to verify backend status
 * @access  Public
 */
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    message: 'Online Shopping API is running smoothly',
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())} seconds`
  });
});

/**
 * @route   GET /api/products
 * @desc    Fetch all available shopping products
 * @access  Public
 */
app.get('/api/products', (req, res) => {
  try {
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to retrieve products',
      details: error.message
    });
  }
});

/**
 * @route   POST /api/checkout
 * @desc    Process a simulated checkout order
 * @access  Public
 */
app.post('/api/checkout', (req, res) => {
  try {
    const { items, totalAmount } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Cart is empty. Please add items before checking out.'
      });
    }

    // Generate a unique order confirmation ID
    const orderId = 'ORD-' + Math.random().toString(36).substring(2, 9).toUpperCase();
    const orderDate = new Date().toLocaleString();

    res.status(200).json({
      success: true,
      message: 'Order placed successfully! Thank you for shopping with us.',
      order: {
        orderId,
        date: orderDate,
        itemCount: items.reduce((acc, item) => acc + (item.quantity || 1), 0),
        totalAmount: Number(totalAmount || 0).toFixed(2),
        items
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Checkout processing failed',
      details: error.message
    });
  }
});

// Fallback route to serve frontend index.html for single-page routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// ==========================================
// Start Server
// ==========================================
app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(` Online Shopping Server is running!`);
  console.log(` Local URL: http://localhost:${PORT}`);
  console.log(` Health API: http://localhost:${PORT}/api/health`);
  console.log(` Products API: http://localhost:${PORT}/api/products`);
  console.log(`=========================================`);
});
