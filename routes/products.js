const express = require('express');
const router = express.Router();

const productsController = require('../controllers/ProductsController')

router.use('/:id', productsController.getProductDetail)
router.use('/', productsController.getAllProducts)

module.exports = router;