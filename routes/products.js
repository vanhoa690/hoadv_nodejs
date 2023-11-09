const express = require('express');
const router = express.Router();

const productsController = require('../controllers/ProductsController')

router.get('/:slug', productsController.getProductDetail)
router.get('/', productsController.getAllProducts)

module.exports = router;