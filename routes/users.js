const express = require('express');
const router = express.Router();

const usersController = require('../controllers/UsersController')

router.get('/', usersController.getAllUsers)
router.post('/', usersController.createUser)

module.exports = router;