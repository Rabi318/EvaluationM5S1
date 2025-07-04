const Author = require("../models/authorModel");
const Book = require("../models/bookModel");

//list the books with filter

exports.list = async (req, res, next) => {
  try {
    let filter = {};
    if (req.query.author) {
      filter.author = req.query.author;
    }
    if (req.query.available === "true") {
      filter.available = true;
    }
    const books = await Book.find(filter).populate("author");
    res.json({ msg: "Books found", books });
  } catch (error) {
    next(error);
  }
};

//get book by id
exports.get = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id).populate("author");
    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }
    res.json({ msg: "Book found", book });
  } catch (error) {
    next(error);
  }
};

//create book
exports.create = async (req, res, next) => {
  try {
    const { author } = req.body;
    const existAuthor = await Author.findById(author);
    if (!existAuthor) {
      return res.status(404).json({ msg: "Author not found" });
    }
    const count = await Book.countDocuments({ author: author });
    if (count >= 5) {
      return res
        .status(400)
        .json({ msg: "Author has reached the limit of 5 books" });
    }
    const book = await Book.create(req.body);
    res.status(201).json({ msg: "Book created", book });
  } catch (error) {
    next(error);
  }
};

//update book by id
exports.update = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }
    res.json({ msg: "Book updated", book });
  } catch (error) {
    next(error);
  }
};

//delete book by id
exports.remove = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }
    res.json({ msg: "Book deleted", book });
  } catch (error) {
    next(error);
  }
};
