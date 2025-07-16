const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  genre: { type: String },
  price: { type: Number, required: true, min: 0 },
  pages: { type: Number, required: true, min: 1 },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  deleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("Book", bookSchema);
