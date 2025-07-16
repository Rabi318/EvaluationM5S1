const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  role: {
    type: String,
    enum: ["viewer", "editor", "admin"],
    default: "viewer",
  },
});

userSchema.pre("save", async function () {
  if (this.isModified("password"))
    this.password = await bcrypt.hash(this.password, 10);
});
userSchema.methods.comparePassword = async function (attempt) {
  return bcrypt.compare(attempt, this.password);
};

module.exports = mongoose.model("User", userSchema);
