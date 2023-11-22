import express from 'express';
import productsController from '../controllers/ProductsController';
import { checkPermission } from '../middlewares/checkPermission';

const routerProducts = express.Router();

routerProducts.get('/:id', productsController.getProductDetail);
routerProducts.get('/', productsController.getAllProducts);
routerProducts.post('/', productsController.createProduct);
routerProducts.put('/:id', productsController.updateProduct);
routerProducts.delete('/:id', checkPermission, productsController.deleleProduct);


export default routerProducts