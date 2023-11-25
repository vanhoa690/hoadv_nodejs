const products = require('./products')
const site = require('./site')
const users = require('./users')
const students = require('./students')
const auth = require('./auth')

function routes(app) {
    app.use('/auth', auth)
    app.use('/students', students)
    app.use('/users', users)
    app.use('/products', products)
    app.use('/', site)
}

module.exports = routes