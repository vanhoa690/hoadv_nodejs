const express = require('express');
const router = express.Router();

const productsController = require('../controllers/ProductsController');
const { checkPermission, checkPermissionStudent } = require('../middlewares/checkPermission');

router.get('/:id', productsController.getProductDetail);
router.get('/', productsController.getAllProducts);
router.post('/', checkPermissionStudent, productsController.createProduct);
router.put('/:id', checkPermission, productsController.updateProduct);
router.delete('/:id', checkPermission, productsController.deleleProduct);

module.exports = router;
