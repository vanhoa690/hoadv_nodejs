const express = require('express');
const router = express.Router();

const productsController = require('../controllers/ProductsController');

router.get('/:id', productsController.getProductDetail);
router.get('/', productsController.getAllProducts);
router.post('/', productsController.createProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleleProduct);

module.exports = router;
