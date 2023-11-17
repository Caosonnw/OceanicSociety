const Product = require("../Models/Product");
const upload = require('../middleware/upload');
const fs = require('fs');

class ProductController {
    create(req, res, next) {
        res.render('CreateProcut/create');
    }
    async store(req, res, next) {
        try {
            const formData = req.body;
            if (req.file) {
                formData.image = '/images/' + req.file.filename;
            }
            const product = new Product(formData);
            await product.save();
            res.redirect('Shop/shop');
        } catch (error) {
            res.status(500).json({ error: 'Lỗi lưu trữ sản phẩm' });
        }
    }

    async edit(req, res, next) {
        try {
            const product = await Product.findById(req.params.id);
            res.render('EditProduct/edit', { product });
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            await Product.updateOne({ _id: req.params.id }, req.body);
            res.redirect('StoredProduct/stored');
        } catch (error) {
            next(error);
        }
    }

    async destroy(req, res, next) {
        try {
            await Product.deleteOne({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            next(error);
        }
    }

    
}

module.exports = new ProductController();
