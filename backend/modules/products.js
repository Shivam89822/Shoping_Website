// products.js
const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/webProject");
    console.log("Connected ✅");
  } catch (e) {
    console.log("Connection fail ❌", e);
  }
}
main();

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    slug: { type: String }, // ✅ Removed unique:true
    price: { type: Number, required: true },
    description: { type: String, required: true },
    rating: { type: Number },
    quantity: { type: Number },
    category: {
      id: { type: Number, required: true },
      name: { type: String },
      slug: { type: String },
      image: { type: String },
      creationAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now },
    },
    images: { type: [String], required: true },
    creationAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    Review: [
      {
        rating: { type: Number },
        text: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = productSchema;
