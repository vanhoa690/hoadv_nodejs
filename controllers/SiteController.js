const Product = require('../models/ProductModel');

class SiteController {
  // [GET] /
  async getProductsHomepage(req, res) {
    try {
      const products = await Product.find().populate('student', '-password');
      res.json(products);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new SiteController();
