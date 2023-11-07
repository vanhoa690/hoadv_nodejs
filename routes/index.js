const products = require('./products')

function routes(app) {
    app.use('/products', products)
}

module.exports = routes