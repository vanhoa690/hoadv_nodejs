const express = require('express');
const router = express.Router();

const productsController = require('../controllers/ProductsController');
const { checkPermissionStudent } = require('../middlewares/checkPermission');

router.get('/:id', checkPermissionStudent, productsController.getProductDetail);
router.get('/', checkPermissionStudent, productsController.getAllProducts);
router.post('/', checkPermissionStudent, productsController.createProduct);
router.put('/:id', checkPermissionStudent, productsController.updateProduct);
router.delete('/:id', checkPermissionStudent, productsController.deleleProduct);

module.exports = router;
