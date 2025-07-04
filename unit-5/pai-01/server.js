const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./configs/db");
const logger = require("./middlewares/loggerMiddleware");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const authorRoutes = require("./routes/authorRoute");
const bookRoutes = require("./routes/bookRoute");

const app = express();
dotenv.config();

app.use(express.json());
connectDB();

app.use(logger);

app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({ msg: "Route not Found" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} 🚀🚀`);
});
