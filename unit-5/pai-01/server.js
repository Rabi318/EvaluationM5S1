const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./configs/db");
const logger = require("./middlewares/loggerMiddleware");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const authorRoutes = require("./routes/authorRoute");
const bookRoutes = require("./routes/bookRoute");

const app = express();
dotenv.config();

connectDB();
app.use(express.json());

app.use(logger);

app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);

app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT} 🚀🚀`);
});
