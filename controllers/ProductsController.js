const Product = require('../models/ProductModel');
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require('../util/mongoose');

class ProductsController {
  // [GET] /products
  async getAllProducts(req, res) {
    try {
      const products = await Product.find();
      // res.json(products);
      res.render('products/list', {
        products: mutipleMongooseToObject(products),
      });
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }

  // [GET] /products/:id
  async getProductDetail(req, res) {
    try {
      const product = await Product.findOne({ slug: req.params.slug });
      // res.json(product);
      res.render('products/detail', {
        product: mongooseToObject(product),
      });
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }

  // [GET] /product/create
  async createProduct(req, res) {
    try {
      const product = await Product.findOne({ slug: req.params.slug });
      // res.json(product);
      res.render('products/create', {
        product: mongooseToObject(product),
      });
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }

   // [POST] /product/store
   async storeProduct(req, res) {
    try {
      const product = new Product(req.body)
      await product.save()
      res.redirect('/products')
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }
}

module.exports = new ProductsController();
