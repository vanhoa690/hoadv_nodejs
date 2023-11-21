const products = require('./products')
const site = require('./site')
const users = require('./users')

function routes(app) {
    app.use('/users', users)
    app.use('/products', products)
    app.use('/', site)
}

module.exports = routes