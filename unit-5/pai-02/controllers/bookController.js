const Book = require("../models/bookModel");

exports.getBooks = async (req, res) => {
  try {
    const query = { deleted: false };
    let books;
    if (req.query.top === "true") {
      books = await Book.find(query)
        .sort({ price: -1 })
        .limit(5)
        .populate("author");
    } else {
      books = await Book.find(query).populate("author");
    }

    res.status(200).json({ msg: "success to get books", data: books });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.createBook = async (req, res) => {
  try {
    const { title, genre, price, pages, authorId } = req.body;
    const book = new Book({ title, genre, price, pages, author: authorId });
    await book.save();
    res.status(201).json({ msg: "Book created successfully", data: book });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, { deleted: true });
    if (!book) {
      res.status(404).json({ msg: "Book not found" });
    }
    res.status(200).json({ msg: "Book deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};
