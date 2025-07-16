const express = require("express");

const router = express.Router();
const { checkRole, protect } = require("../middleware/authMiddleware");
const {
  getAuthors,
  createAuthor,
  deleteAuthor,
} = require("../controllers/authorController");

router.get("/", protect, getAuthors);
router.post("/", protect, checkRole(["editor", "admin"]), createAuthor);
router.delete("/:id", protect, checkRole(["editor", "admin"]), deleteAuthor);

module.exports = router;
