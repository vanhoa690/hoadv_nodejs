const Product = require('../models/ProductModel');

class ProductsController {
  // [GET] /products
  async getAllProducts(req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }

  // [GET] /products/:id
  async getProductDetail(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }

  // [POST] /product
  async createProduct(req, res) {
    try {
      const product = new Product(req.body);
      await product.save();
      res.json({ message: "Add Product Successful"});
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }

  // [PUT] /products/:id
  async updateProduct(req, res) {
    try {
      const product = await Product.updateOne({ _id: req.params.id }, req.body);
      res.status(200).json({ message: 'Update Product Successful'});
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }

  // [DELETE] /products/:id
  async deleleProduct(req, res) {
    try {
       await Product.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Delete Product Successful' });
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }
}

module.exports = new ProductsController();
