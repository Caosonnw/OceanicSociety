const upload = require('../middleware/upload');
const express = require('express');
const router = express.Router();
const productController = require('../Controllers/ProductController');


//Tạo sản phẩm
router.get('/create', productController.create);
//Lấy dữ liệu sản phẩm
router.post('/store',upload.single('image'), productController.store);
//Chỉnh sửa sản phẩm
router.get('/:id/edit', productController.edit);
router.put('/:id', productController.update);
//Xóa sản phẩm
router.delete('/:id', productController.destroy);

module.exports = router;
