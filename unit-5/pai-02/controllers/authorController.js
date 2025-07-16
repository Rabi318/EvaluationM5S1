const Author = require("../models/authorModel");
const Book = require("../models/bookModel");

exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json({ msg: "success to get authors", data: authors });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.createAuthor = async (req, res) => {
  try {
    const { name } = req.body;
    const author = new Author({ name });
    await author.save();
    res.status(201).json({ msg: "Author created successfully", data: author });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    if (!author) {
      res.status(404).json({ msg: "Author not found" });
    }
    await Book.updateMany({ author: author._id }, { $unset: { author: "" } });
    res.status(200).json({ msg: "Author deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};
