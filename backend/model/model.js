const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: String,
    image: String,
    comments: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'comments',
        }
    ]
});

const CommentSchema = new mongoose.Schema({
    content: String,
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'users'
    // },
    user: String,
    productItem: String,
    date: String
});

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Boolean,
        default: false
    }
})

const Product = mongoose.model('products', ProductSchema);
const User = mongoose.model('users', UserSchema);
const Comment = mongoose.model('comments', CommentSchema);

module.exports = { Product, User, Comment };
