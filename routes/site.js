import express from 'express';
import siteController from '../controllers/SiteController';

const routerSite = express.Router();

routerSite.get('/', siteController.getProductsHomepage);

export default routerSite;
