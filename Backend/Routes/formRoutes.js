const express = require('express');
const router = express.Router();
const FormController = require('../Controllers/formController');

// Tạo form
router.post('/create', FormController.createForm);

// Lấy tất cả form
router.get('/getAllform', FormController.getAllForm);

module.exports = router;
