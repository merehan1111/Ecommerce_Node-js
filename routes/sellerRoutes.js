const express=require('express');
const { addSeller, getAllSeller,getAllProductBySeller,addProductBySeller, deletProductBySeller, updateProductBySeller } = require('../controller/sellerController');
const sellRouts=express.Router();
sellRouts.post("/",addSeller);
sellRouts.get("/",getAllSeller);
sellRouts.get("/:id/products",getAllProductBySeller);
sellRouts.post("/:sellerId/products",addProductBySeller);
sellRouts.patch("/:sellerId/products/:productId",updateProductBySeller);
sellRouts.delete("/:sellerId/products/:productId",deletProductBySeller)

module.exports=sellRouts