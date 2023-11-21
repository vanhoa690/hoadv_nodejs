const express = require('express');
const router = express.Router();

const usersController = require('../controllers/UsersController')

router.get('/:id', usersController.getUserDetail)
router.get('/', usersController.getAllUsers)
router.post('/login', usersController.loginUser)
router.post('/', usersController.createUser)
router.delete('/:id', usersController.deleleUser)

module.exports = router;