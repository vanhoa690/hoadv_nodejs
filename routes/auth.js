const express = require('express');
const router = express.Router();

const authController = require('../controllers/AuthController')

router.post('/login', authController.loginStudent)
router.post('/register', authController.registerStudent)

module.exports = router;