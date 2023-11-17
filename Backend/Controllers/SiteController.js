const Product = require("../Models/Product");

class SiteContronller {
    // [GET] /shop
    async shop(req, res) {
        try {
            const products = await Product.find({});
            res.render('/Shop/shop', { products });
        } catch (error) {
            res.status(500).send(`Error: ${error.message}`);
        }
    }

    async getAllProducts(req, res, next) {
        try {
            const products = await Product.find({});
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    //[GET] /category/:categoryName
    // async categoryProducts(req, res, next) {
    //     try {
    //         const category = req.params.category.toLowerCase();
            
    //         const query = {
    //             $or: [
    //                 { name: { $regex: category, $options: 'i' } },
    //             ]
    //         };
            
    //         const products = await Product.find(query);
    //         res.render('category', { products });
    //     } catch (error) {
    //         next(error);
    //     }
    // }

    // [GET] /search
    // async search(req, res, next) {
    //     try {
    //         const searchTerm = req.query.query;
    //         const products = await Product.find({ $text: { $search: searchTerm } });
    //         res.render('search-results', { products });
    //     } catch (error) {
    //         next(error);
    //     }
    // }
}

module.exports = new SiteContronller();
