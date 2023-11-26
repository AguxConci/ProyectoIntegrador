const express = require('express');
const router = express.Router();
const adminControllers = require ('../controllers/adminControllers')

router.get('/', (req, res) => res.send(adminControllers.adminView));
router.get('/create', (req, res) => res.send(adminControllers.createView));
router.post('/create', (req, res) => res.send(adminControllers.createItem));
router.get('/edit/:id', (req, res) => res.send(adminControllers.editView));
router.put('/edit/:id', (req, res) => res.send(adminControllers.editItem));
router.delete('/delete/:id', (req, res) => res.send(adminControllers.deleteItem));
//Auth Routes
router.get('/login', (req, res) => res.send(adminControllers.loginView));
router.post('/login', (req, res) => res.send(adminControllers,adminControllers.loginUser));
router.get('/register', (req, res) => res.send(adminControllers.registerView));
router.post('/register', (req, res) => res.send(adminControllers.registerUser));


module.exports = router;