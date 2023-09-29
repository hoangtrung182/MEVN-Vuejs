const { Product, User } = require("../model/model");
const jwt = require("jsonwebtoken");

module.exports.requireAuth = async (req, res, next) => {
    const token = req.headers?.token.split(' ')[1];
    if(token) {
        jwt.verify(token, "myaccesskey", (err, user) => {
            if(err) {
                res.status(401).json("Invalid token");
                return;
            }
            req.userId = user._id;
            next();
        })
    } else {
        res.status(401).json({ msg: "You're not authenticated"});
    }
}