const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Route for Shop View'));
router.get('/item/:id', (req, res) => res.send('Route for find and retrieve a product from an ID'));
router.post('/item/:id/add', (req, res) => res.send('Route for add the curent item to the shop cart'));
router.get('/cart', (req, res) => res.send('Route for cart View'));
router.post('/cart', (req, res) => res.send('Route for got to checkout page'));

module.exports = router;