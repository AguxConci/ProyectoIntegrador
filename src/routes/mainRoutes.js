const express = require('express');
const router = express.Router();
const mainControllers = require ('../controllers/mainControllers')

router.get('/home', (req, res) => res.send(mainControllers.home));
router.get('/contact', (req, res) => res.send(mainControllers.contact));
router.get('/about', (req, res) => res.send(mainControllers.about));
router.get('/faqs', (req, res) => res.send(mainControllers.faqs));

module.exports = router;
