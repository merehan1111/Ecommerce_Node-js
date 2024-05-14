const orderModel=require('../modules/order');
const addOrder=async(req,res)=>{
    try{
    const{sellerId,productId}=req.body
    const newOrder= await orderModel.create({sellerId,productId});
    if(!newOrder){return res.status(400).json({messge:'not added'})}
    res.status(200).json({messge:"added susess",data:newOrder})
    }catch(err){
        res.status(500).json({messge:err.messge});
    }
}
const getAllOrder=async(req,res)=>{
    try{
    const newOrder=await orderModel.find();
    res.status(200).json({messge:'reteurn susess',data:newOrder})
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}
const updateOrder=async(req,res)=>{
    const{id}=req.params
    const newOrder =await orderModel.findByIdAndUpdate(id)
    if(!newOrder){return res.status(404).json({message:"not found"})}
    res.status(200).json({message:'update sucsses'});
}
const deleteOrder=async(req,res)=>{
    try{
    const {id}=req.params;
    const delOrder=await orderModel.findByIdAndDelete(id);
    if(!delOrder){return res.status(404).json({message:"not found"})}
    res.status(200).json({message:'deleted sucsses',delOrder});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}
module.exports={addOrder,getAllOrder,updateOrder,deleteOrder}
