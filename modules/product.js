
const mongoose =require('mongoose');

const productSchema=new mongoose.Schema({
    Name:{
        type:String ,
        required:true,
        unique:true,
        maxlength:30,
        minlength:5
        
    },
  description: {
    type :String
  },
  photo:{
    type:String
  },
  sellerId:{
    type:mongoose.Types.ObjectId,
    ref :'Seller'
  }
},{timestamps:true});
const productModel = mongoose.model('Product',productSchema)
module.exports=productModel