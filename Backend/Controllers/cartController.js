const Cart = require("../models/Cart");
const Product = require("../Models/Product");

class CartController {
    async showCart(req, res, next) {
        try {
            const cartItems = await Cart.find({}).populate('productId');

            const formattedCartItems = cartItems.map(item => ({
                ...item.toObject(),
                productId: item.productId.toObject()
            }));

            const subtotal = formattedCartItems.reduce((acc, item) => {
                const productPrice = item.productId.price || 0;
                return acc + productPrice * item.quantity;
            }, 0);

            const taxRate = 0.1;
            const tax = subtotal * taxRate;
            const shipping = 10;

            const total = subtotal + tax + shipping;

            const roundedSubtotal = subtotal.toFixed(2);
            const roundedTax = tax.toFixed(2);
            const roundedShipping = shipping.toFixed(2);
            const roundedTotal = total.toFixed(2);

            res.json({
                cartItems: formattedCartItems,
                subtotal: roundedSubtotal,
                tax: roundedTax,
                shipping: roundedShipping,
                total: roundedTotal
            });
        } catch (error) {
            next(error);
        }
    }

    async addToCart(req, res, next) {
        try {
            const productId = req.params.productId;
            const foundProduct = await Product.findById(productId);

            if (!foundProduct) {
                return res.status(404).json({ error: 'Product not found' });
            }

            let existingCartItem = await Cart.findOne({ productId });

            if (existingCartItem) {
                existingCartItem.quantity += 1;
                await existingCartItem.save();
            } else {
                const cartItem = new Cart({
                    productId: foundProduct._id,
                    quantity: 1,
                });
                await cartItem.save();
            }

            res.redirect('/');
        } catch (error) {
            next(error);
        }
    }

    async updateQuantity(req, res, next) {
        try {
            const cartItemId = req.params.cartItemId;
            const { quantity } = req.body;

            const updatedCartItem = await Cart.findByIdAndUpdate(cartItemId, { quantity }, { new: true });

            if (!updatedCartItem) {
                return res.status(404).json({ error: 'Cart item not found' });
            }

            res.redirect('/cart');
        } catch (error) {
            next(error);
        }
    }

    async removeFromCart(req, res, next) {
        try {
            const cartItemId = req.params.cartItemId;
            await Cart.findByIdAndDelete(cartItemId);
            
            if (!Cart) {
                return res.status(404).json({ error: 'Cart item not found' });
            }
            res.redirect('/cart');
        } catch (error) {
            next(error);
        }
    }

    async checkout(req, res, next) {
        try {
            const cartItems = await Cart.find({}).populate('productId');

            const formattedCartItems = cartItems.map(item => ({
                ...item.toObject(),
                productId: item.productId.toObject()
            }));

            const subtotal = formattedCartItems.reduce((acc, item) => {
                const productPrice = item.productId.price || 0;
                return acc + productPrice * item.quantity;
            }, 0);

            const taxRate = 0.1;
            const tax = subtotal * taxRate;
            const shipping = 10;

            const total = subtotal + tax + shipping;

            const roundedSubtotal = subtotal.toFixed(2);
            const roundedTax = tax.toFixed(2);
            const roundedShipping = shipping.toFixed(2);
            const roundedTotal = total.toFixed(2);

            res.render('cart/checkout', {
                cartItems: formattedCartItems,
                subtotal: roundedSubtotal,
                tax: roundedTax,
                shipping: roundedShipping,
                total: roundedTotal
            });
        } catch (error) {
            next(error);
        }
    }

    async processPayment(req, res, next) {
        try {
            const { paymentMethod } = req.body;

            if (paymentMethod === 'cash-on-delivery') {
                await Cart.deleteMany({});
                res.render('cart/paymentSuccess');
            } else if (paymentMethod === 'bank-transfer') {
                res.render('cart/bankTransferDetails');
            } else {
                res.status(400).send('Invalid payment method');
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CartController();