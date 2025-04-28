const mongoose = require('mongoose');
const productSchema = require('../modules/products'); // now correctly importing the schema

const Product = mongoose.model('Product', productSchema, 'products');


exports.getProducts = async (req, res) => {
    try {
      const priceLimit = Number(req.query.price); 
      const category = req.query.category;
  
      // Build the query object
      let filter = {
        price: { $lt: priceLimit }
      };
  
      // If category is passed and not "General", apply category filter
      if (category && category !== 'General') {
        filter["category.name"] = category; // ✔️ works with embedded objects
      }
  
      // Use the dynamic filter in your query
      const products = await Product.find(filter);
  
      console.log("✅ Products Fetched Successfully");
      res.status(200).json(products);
    } catch (e) {
      console.error("❌ Can't Fetch", e);
      res.sendStatus(500); 
    }
  };
  