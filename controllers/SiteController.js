import Product from '../models/ProductModel';

class SiteController {
  // [GET] /
  async getProductsHomepage(req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }
}

export default new SiteController();
