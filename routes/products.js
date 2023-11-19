const express = require('express');
const router = express.Router();

const productsController = require('../controllers/ProductsController')

router.get('/all', productsController.getAllProducts)
// router.get('/create', productsController.createProduct)
router.get('/:id', productsController.getProductDetail)
router.get('/', productsController.getAllProducts)
router.post('/store', productsController.storeProduct)
router.post('/add', productsController.storeProduct)


router.put('/:id', productsController.updateProduct)


router.delete('/:id', productsController.deleleProduct)

module.exports = router;