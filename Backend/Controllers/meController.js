const Product = require("../Models/Product");

class MeController {
    // [GET] /me/stored/products
    async storedProducts(req, res, next) {
        try {
            const products = await Product.find({});
            res.render('me/stored-products', { products });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new MeController();
