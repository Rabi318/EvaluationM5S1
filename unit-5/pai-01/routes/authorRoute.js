const express = require("express");
const authorController = require("../controllers/authController");
const { validateAuthor } = require("../middlewares/validateMiddleware");

const router = express.Router();

router.get("/", authorController.list);
router.get("/:id", authorController.get);
router.post("/", validateAuthor, authorController.create);
router.put("/:id", validateAuthor, authorController.update);
router.delete("/:id", authorController.remove);

module.exports = router;
