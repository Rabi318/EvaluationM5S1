const Author = require("../models/authorModel");
const Book = require("../models/bookModel");

//get all the authors
exports.list = async (req, res, next) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    next(error);
  }
};

//get author by id
exports.get = async (req, res, next) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) {
      return res.status(404).json({ msg: "Author not found" });
    }
    res.json(author);
  } catch (error) {
    next(error);
  }
};

//author create
exports.create = async (req, res, next) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (error) {
    next(error);
  }
};

//update author by id
exports.update = async (req, res, next) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!author) {
      return res.status(404).json({ msg: "Author not found" });
    }
    res.json(author);
  } catch (error) {
    next(error);
  }
};

//delete author by id
exports.remove = async (req, res, next) => {
  try {
    const count = await Book.countDocuments({ author: req.params.id });
    if (count > 0) {
      return res.status(400).json({ msg: "Author has books" });
    }
    const author = await Author.findByIdAndDelete(req.params.id);
    if (!author) {
      return res.status(404).json({ msg: "Author not found" });
    }
    res.json(author);
  } catch (error) {
    next(error);
  }
};
