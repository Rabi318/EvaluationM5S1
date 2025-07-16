const Book = require("../models/bookModel");

exports.topAuthors = async (req, res) => {
  try {
    const data = await Book.aggregate([
      { $match: { deleted: false } },
      { $group: { _id: "$author", totalPages: { $sum: "$pages" } } },
      { $sort: { totalPages: -1 } },
      { $limit: 3 },
    ]);
    res.status(200).json({ msg: "success to get top authors", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.genreBreakdown = async (req, res) => {
  try {
    const data = await Book.aggregate([
      { $match: { deleted: false } },
      { $group: { _id: "$genre", count: { $sum: 1 } } },
    ]);
    res.status(200).json({ msg: "success to get genre breakdown", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};
