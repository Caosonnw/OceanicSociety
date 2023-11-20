const express = require('express')
const router = express.Router();
const siteController = require('../Controllers/SiteController');


router.get('/shop', siteController.shop);
//Lấy sản phẩm
router.get('/getproduct', siteController.getAllProducts);
// Route để hiển thị danh sách sản phẩm theo từng loại
router.get('/category/:category', siteController.categoryProducts);
// Tìm kiếm sản phẩm theo String
router.get('/search', siteController.search);

module.exports = router;    