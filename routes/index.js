const products = require('./products')

function routes(app) {
    app.use('/products', products)
    app.use('/home', products)
}

module.exports = routes