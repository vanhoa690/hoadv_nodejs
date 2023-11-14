const express = require('express');
const router = express.Router();

const productsController = require('../controllers/ProductsController')

router.get('/create', productsController.createProduct)
router.get('/:slug', productsController.getProductDetail)
router.get('/', productsController.getAllProducts)
router.post('/store', productsController.storeProduct)
router.put('/:id', productsController.updateProduct)
router.delete('/:id', productsController.deleleProduct)

module.exports = router;