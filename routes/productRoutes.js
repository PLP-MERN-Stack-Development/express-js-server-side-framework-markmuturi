const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const authenticate = require('../middleware/auth');


// Fetch all Products
router.get("/", async (req, res, next) => {
    try {
        const products = await Product.find();
        if (products.length === 0) {
            const error = new Error("NO PRODUCTS FOUND");
            res.status(404);
            throw error;
        }
        res.json(products);
    } catch (error) {
        next(error);
    }
});

// Fetch a specific product by id
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            const error = new Error('Product not found');
            res.status(404);
            throw error;
        }
        res.json(product);
    } catch (error) {
        next(error);
    }
});

// Create a new product
router.post("/", authenticate, async (req, res, next) => {
    const { name, description, price, category, inStock } = req.body;

    try {
        const product = new Product({ name, description, price, category, inStock });
        const saved = await product.save();
        res.status(201).json(saved);
    } catch (error) {
        next(error);
    }
})

// Update a product by id
router.put("/:id", authenticate, async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true},
        );
        if (!product) {
            const error = new Error('Product not found');
            res.status(404);
            throw error;
        }
        res.json(product);
    } catch (error) {
        next(error);
    }
});

// Delete a product by id
router.delete("/:id", authenticate, async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(
            req.params.id,
        );
        if (!product) {
            const error = new Error('Product not found');
            res.status(404);
            throw error;
        }
        res.json({ message: "Product Deleted Successfully "});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;