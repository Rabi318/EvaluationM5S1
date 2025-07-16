const express = require("express");

const router = express.Router();
const { checkRole, protect } = require("../middleware/authMiddleware");
const {
  getBooks,
  createBook,
  deleteBook,
} = require("../controllers/bookController");

router.get("/", protect, getBooks);
router.post("/", protect, checkRole(["editor", "admin"]), createBook);
router.delete("/:id", protect, checkRole(["editor", "admin"]), deleteBook);

module.exports = router;
