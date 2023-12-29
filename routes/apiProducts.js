const express = require('express');
const router = express.Router();

const apiProductsController = require('../controllers/ApiProductsController');

router.get('/:id', apiProductsController.getProductDetail);
router.get('/', apiProductsController.getAllProducts);
router.post('/', apiProductsController.createProduct);
router.put('/:id', apiProductsController.updateProduct);
router.delete('/:id', apiProductsController.deleleProduct);

module.exports = router;
