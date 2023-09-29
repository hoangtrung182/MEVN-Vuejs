const Joi = require("joi");
const { User } = require("../model/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = Joi.object({
    fullname: Joi.string().trim().required(),
    email: Joi.string().email().pattern(/@gmail.com/).required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required()
})

const UserController = {
    getAllUsers: async (req, res) => {
        try {
            const allUser = await User.findOne();
            res.status(200).json(allUser);
        } catch (error) {
            res.status(500).json({ msg: error})
        }
    },
    register: async (req, res) => {
        try {
            const { error } = UserSchema.validate(req.body, { abortEarly: false});
            if(error) {
                res.status(403).json({ msg: error.details.map(error => error.message)});
                return;
            }
            const { fullname, email, password, role} = req.body;
            const matchedUser = await User.findOne({ email: email});
            if(matchedUser) {
                res.status(403).json({ msg: "User already registered"});
                return;
            }
            const hassPassword = bcrypt.hashSync(password, 10);
            const newUser = await User.create({ fullname, email, password: hassPassword, role});
            res.status(200).json({msg: "Registered successfully", newUser});
        } catch (error) {
            res.status(500).json({ msg: error})
        }
    },
    login: async (req, res) => {
        try {
            const { email, password} = req.body;
            const userOne = await User.findOne({ email: email});
            if(!userOne) {
                res.status(404).json("User not exists");
                return;
            }
            const matched = bcrypt.compareSync(password, userOne.password);
            if(!matched) {
                res.status(403).json({ msg: "Wrong password"});
                return;
            }
            if(userOne && matched) {
                const token = jwt.sign({ id: userOne.id, role: userOne.role},
                "myaccesskey",
                { expiresIn: '1d' }    
                )
                res.status(200).json({ success: true, msg: "Login successful", token});
            }
        } catch (error) {
            res.status(500).json({ msg: error})
        }
    }
}

module.exports = UserController;