const ProductController = require("../controllers/product.controller");

const router = require("express").Router();


router.get("/", ProductController.getAllProducts);

router.post("/create", ProductController.addProduct);

router.get("/:id", ProductController.getProduct);

router.put("/:id", ProductController.updateProduct);

router.delete("/:id", ProductController.deleteProduct);


module.exports = router;