const products = require('./products')
const site = require('./site')
const users = require('./users')
const students = require('./students')
const auth = require('./auth')
const { checkPermissionStudent, checkPermissionUser } = require('../middlewares/checkPermission');

function routes(app) {
    app.use('/auth', auth)
    app.use('/students', students)
    app.use('/users', checkPermissionUser, users)
    app.use('/products', checkPermissionStudent, products)
    app.use('/', site)
}

module.exports = routes