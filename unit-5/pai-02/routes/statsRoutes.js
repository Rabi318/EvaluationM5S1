const express = require("express");

const router = express.Router();
const { checkRole, protect } = require("../middleware/authMiddleware");
const {
  topAuthors,
  genreBreakdown,
} = require("../controllers/statsController");

router.get("/top-authors", protect, topAuthors);
router.get("/genre-breakdown", protect, genreBreakdown);

module.exports = router;
