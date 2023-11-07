class ProductsController {
    // [GET] /products
    getAllProducts(req, res) {
        res.render('productList')
    }

       // [GET] /products/:id
       getProductDetail(req, res) {
        res.render('productDetail')
    }
}

module.exports = new ProductsController