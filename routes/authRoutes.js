const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//Login
router.post('/login', authController.postLogin);

//Register
router.post('/register', authController.postRegister);

//Logout
router.post('/logout', authController.postLogout)

module.exports = router;