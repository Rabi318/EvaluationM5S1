const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
app.use(express.json());
connectDB();

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
