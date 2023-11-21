const Product = require('../models/ProductModel');

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

module.exports = new SiteController();
