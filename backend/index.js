const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

const ProductRoute = require("./routes/product.route");

mongoose.connect('mongodb://127.0.0.1:27017/vue').then(() => console.log("Connected to MongoDB"));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.use("/products", ProductRoute);

app.listen(port, () => {
    console.log("Server is running on port " + port);
})