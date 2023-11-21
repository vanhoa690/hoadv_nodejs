const express = require('express');
const router = express.Router();

const usersController = require('../controllers/UsersController')

router.get('/', usersController.getAllUsers)

module.exports = router;