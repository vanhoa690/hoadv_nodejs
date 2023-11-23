const express = require('express');
const router = express.Router();

const productsController = require('../controllers/ProductsController');
const checkPermission = require('../middlewares/checkPermission');
/**
 * @swagger
 * /products/:id:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder products
 *     description: Retrieve a list of products from JSONPlaceholder. Can be used to populate a list of fake products when prototyping or testing an API.
 */
router.get('/:id', productsController.getProductDetail);
/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder products
 *     description: Retrieve a list of products from JSONPlaceholder. Can be used to populate a list of fake products when prototyping or testing an API.
 */
router.get('/', productsController.getAllProducts);
router.post('/', checkPermission, productsController.createProduct);
router.put('/:id', checkPermission, productsController.updateProduct);
router.delete('/:id', checkPermission, productsController.deleleProduct);

module.exports = router;
