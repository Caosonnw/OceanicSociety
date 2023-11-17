const express = require('express');
const router = express.Router();
const MeController = require('../Controllers/MeController');

//Kho sản phẩm
router.get('/stored/product', MeController.storedProducts)

module.exports = router;