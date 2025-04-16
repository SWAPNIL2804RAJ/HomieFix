const express = require('express');
const { 
    signupValidation, 
    adminSignupValidation, 
    loginValidation 
} = require('../Middlewares/AuthValidation');
const { 
    signup, 
    login, 
    Adminlogin, 
    Adminsignup, 
    getAdminProfile 
} = require('../Controllers/AuthController');
const verifyToken = require('../Middlewares/Auth'); // Middleware to verify token
const Admin = require('../Models/admin');

const router = express.Router();

// Admin Signup Route
router.post('/Adminsignup', adminSignupValidation, Adminsignup);

// Admin Login Route
router.post('/Adminlogin', loginValidation, Adminlogin);

// User Login Route
router.post('/login', loginValidation, login);

// User Signup Route
router.post('/signup', signupValidation, signup);

// Get Admin Profile Route
router.get('/admins/profile', verifyToken, getAdminProfile);

module.exports = router;
