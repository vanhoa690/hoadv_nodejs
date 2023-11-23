const express = require('express');
const router = express.Router();

const usersController = require('../controllers/UsersController')

router.get('/:id', usersController.getUserDetail)
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
router.get('/', usersController.getAllUsers)
router.post('/login', usersController.loginUser)
router.post('/', usersController.createUser)
router.delete('/:id', usersController.deleleUser)

module.exports = router;