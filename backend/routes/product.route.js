const CommentController = require("../controllers/comment.controller");
const ProductController = require("../controllers/product.controller");
const { requireAuth } = require("../middleware/auth.middleware");

const router = require("express").Router();


router.get("/", ProductController.getAllProducts);

router.post("/create", requireAuth, ProductController.addProduct);

router.get("/:id", ProductController.getProduct);

router.put("/:id", ProductController.updateProduct);

router.delete("/:id", ProductController.deleteProduct);

router.post("/:id/comments", CommentController.addComment);



module.exports = router;