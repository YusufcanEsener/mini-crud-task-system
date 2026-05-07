const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//Login
router.post('/login', authController.postLogin);

//Register
router.post('/register', authController.postRegister);

module.exports = router;