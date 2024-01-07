const ProductModel = require('../models/product.model');

const addProduct = async (req, res) => {
    try {
        await ProductModel.create({
            name: req.body.name,
            category: req.body.category,
            description: req.body.description,
            userId: req.user._id,
        })
        res.status(200).send({ message: 'Add Product Successfully' });
    } catch (err) {
        console.log('addProduct', err);
        res.status(500).send({ message: 'Something went wrong' });
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({ userId: req.user._id }, { name: 1, category: 1, createdOn: 1 })
        res.status(200).send({ products });
    } catch (err) {
        console.log('getProducts', err);
        res.status(500).send({ message: 'Something went wrong' });
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await ProductModel.findOne({ _id: req.params.id, userId: req.user._id }, { name: 1, category: 1, description: 1 })
        res.status(200).send({ product });
    } catch (err) {
        console.log('getProductById', err);
        res.status(500).send({ message: 'Something went wrong' });
    }
}

module.exports = {
    addProduct,
    getProducts,
    getProductById,
}