const express = require("express");
const bookController = require("../controllers/bookController");
const { validateBook } = require("../middlewares/validateMiddleware");

const router = express.Router();

router.get("/", bookController.list);
router.get("/:id", bookController.get);
router.post("/", validateBook, bookController.create);
router.put("/:id", validateBook, bookController.update);
router.delete("/:id", bookController.remove);

module.exports = router;
