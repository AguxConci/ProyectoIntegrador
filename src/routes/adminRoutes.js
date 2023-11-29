const express = require('express');
const router = express.Router();
const adminControllers = require ('../controllers/adminControllers')

router.get('/', adminControllers.adminView);
router.get('/create', adminControllers.createView);
router.post('/create', adminControllers.createItem);
router.get('/edit/:id', adminControllers.editView);
router.put('/edit/:id', adminControllers.editItem);
router.delete('/delete/:id', adminControllers.deleteItem);



module.exports = router;