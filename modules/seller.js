const mongoose = require('mongoose');
const sellerSchema =new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },

},{timestamps:true});
const sellerModel=mongoose.model('Seller',sellerSchema);
module.exports=sellerModel