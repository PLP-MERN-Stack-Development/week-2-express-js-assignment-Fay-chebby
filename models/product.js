const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: String,
  price: Number,
  category: String,
  inStock: Boolean,
});
module.exports = mongoose.model("Product", productSchema);
