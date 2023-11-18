const Product = require("../Models/Product");

class MeController {
    // [GET]
    async storedProducts(req, res, next) {
        try {
            const products = await Product.find({});
            // res.render('StoreProduct/stored', { products });
            res.json({ products });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new MeController();
