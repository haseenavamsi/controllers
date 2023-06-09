const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/add-product', productController.getAllProducts);
router.post('/add-product', productController.postAllProducts);
router.get('/products', productController.getProducts);

module.exports = router;
