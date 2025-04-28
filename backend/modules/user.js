// user.js
const mongoose = require('mongoose');
const productSchema = require('./products'); // ✅ Import schema only

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/webProject');
    console.log("Connected ✅");
  } catch (e) {
    console.log("Connection fail ❌", e);
  }
}
main();

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    userId: { type: Number, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    password: { type: String, required: true },

    order: [productSchema],      // ✅ Embedded schema without unique fields
    whishlist: [productSchema],
    cart: [productSchema],
    shopHistory: [productSchema],
  },
  {
    timestamps: true,
    collection: "user",
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
