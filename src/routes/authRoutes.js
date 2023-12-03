const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const authControllers = require ('../controllers/authControllers.js');
const validacion = require ('./middlewares/validacion.js')

const loginValidation = [
    body('email')
    .isEmail()
    .withMessage('Debe ingresar un correo válido'),
    body('password')
     .isLength({ min: 6})
     .isAlphanumeric()
     .withMessage('La contraseña debe tener al menos 6 caracteres y contener letras y números.')
  ];

//Auth Routes
router.get('/login', authControllers.loginView);
router.post('/login', loginValidation, validacion ,authControllers.loginUser);
router.get('/register',authControllers.registerView);
router.post('/register', authControllers.registerUser);
router.get('/logout',authControllers.logoutView);


module.exports = router;