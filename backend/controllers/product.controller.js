const Joi = require("joi");
const { Product, Comment } = require("../model/model");

const ProductSchema = Joi.object({
    name: Joi.string().trim().required(),
    price: Joi.number().integer().min(1).required(),
    description: Joi.string(),
    image: Joi.string().trim().required()
})

const ProductController = {
    getAllProducts: async (req, res) => {
        try {
            const allProducts = await Product.find();
            res.status(200).json(allProducts);
        } catch (error) {
            res.status(500).json({ msg: error});
        }
    },
    getProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findById(id);
            const allComments = await Comment.find({ productItem: id});
            res.status(200).json({product, allComments});
        } catch (error) {
            res.status(500).json({ msg: error});
        }
    },
    addProduct: async (req, res) => {
        try {
            const { error } = ProductSchema.validate(req.body, { abortEarly: false});
            if(error) {
                return res.status(403).json({ msg: error.details.map(err => err.message)});
            };
            const newProduct = await Product.create(req.body);
            res.status(200).json({ msg: "Added product successfully"});
        } catch (error) {
            res.status(500).json({ msg: error});
        }
    },
    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const { error } = ProductSchema.validate(req.body, { abortEarly: false});
            if(error) {
                return res.status(403).json({ msg: error.details.map(err => err.message)});
            };
            const updatedProduct = await Product.findByIdAndUpdate(id, req.body);
            res.status(200).json({ msg: "Updated successfully"});
        } catch (error) {
            res.status(500).json({ msg: error});
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedProduct = await Product.findByIdAndDelete(id);
            res.status(200).json({ msg: "Updated successfully"});  
        } catch (error) {
            res.status(500).json({ msg: error});
        }
    }
}

module.exports = ProductController;