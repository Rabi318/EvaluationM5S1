exports.validateAuthor = (req, res, next) => {
  const { name } = req.body;
  if (!name || typeof name !== "string") {
    return res
      .status(400)
      .json({ msg: "Name is required and must be a string" });
  }

  next();
};

exports.validateBook = (req, res, next) => {
  const { title, author } = req.body;
  if (!title || typeof title !== "string") {
    return res
      .status(400)
      .json({ msg: "Title is required and must be a string" });
  }
  if (!author) {
    return res.status(400).json({ msg: "Author is required " });
  }
  next();
};
