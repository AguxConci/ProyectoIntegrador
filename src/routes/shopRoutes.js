const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopControllers');

router.get('/', (req, res) => res.send(shopControllers.View));
router.get('/item/:id', (req, res) => res.send(shopControllers.itemView));
router.post('/item/:id/add', (req, res) => res.send(shopControllers.addItemToCart));
router.get('/cart', (req, res) => res.send(shopControllers.cartView));
router.post('/cart', (req, res) => res.send(shopControllers.checkout));

module.exports = router;