module.exports = (error, req, res, next) => {
  console.log(error);
  res.status(500).json({ msg: error.message || "Something went wrong" });
};
