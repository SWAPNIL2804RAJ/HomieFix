const { signupValidation, adminSignupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const {signup} = require('../Controllers/AuthController');
const {login} = require('../Controllers/AuthController');
const {Adminlogin} = require('../Controllers/AuthController');
const {Adminsignup} = require('../Controllers/AuthController');

const router = require('express').Router();

router.post('/Adminsignup', 
    adminSignupValidation, 
    Adminsignup);
router.post('/Adminlogin', loginValidation, Adminlogin);
router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
// router.get('/admin/profile', verifyToken, getAdminProfile);

module.exports = router;