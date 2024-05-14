const mongoose=require('mongoose');
const orderSchema=new mongoose.Schema({
    sellerId:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    productId:[{
        type:mongoose.Types.ObjectId,
        ref:'Product',
        required:true
    }],
},{timestamps:true})
const orderModel = mongoose.model('Order',orderSchema)
module.exports=orderModel