const { model, Schema } = require("mongoose");

const brandSchema = new Schema({
  name: String,
  createdAt: String,
});

module.exports = model("Brand", brandSchema);
