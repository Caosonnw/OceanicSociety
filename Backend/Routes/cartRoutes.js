const express = require('express')
const router = express.Router();

const cartController = require('../Controllers/cartController');

// Thêm vào giỏ hàng
router.post('/add/:productId', cartController.addToCart);
// Bỏ khỏi giỏ hàng
router.post('/remove/:cartItemId', cartController.removeFromCart);
// Update số lượng sản phẩm
router.post('/update/:cartItemId', cartController.updateQuantity);
// Thanh toán
router.post('/checkout', cartController.checkout);
//Show cart
router.get('/', cartController.showCart);

module.exports = router;