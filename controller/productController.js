const productModel= require('../modules/product');
const addProduct=async(req,res)=>{
    try{
   const photo=req.file.filename
    const{Name,description,sellerId}=req.body;
    const newProduct=await productModel.create({photo,Name,description,sellerId})
    if(!newProduct) {
        return res.status(400).json({message:"faild to succes"})
    }
    res.status(200).json({message:'added succes'})
}catch(err){
    res.status(500).json({message:err.message})
}

}
const getAllProduct=async(req,res)=>{
    try{
        const allproduct=await productModel.find();
        res.status(200).json({message:"secces",data:allproduct})
    }catch(err){
        res.status(500).json({message:err.message})
    }

}
const updateProduct=async(req,res)=>{
    const {id}=req.params
    const photo=req.body.photo
    const{Name,description,sellerId}=req.body;
    const newproduct=await productModel.findByIdAndUpdate(id,{Name,description,sellerId},{new:true})
    if(!newproduct){
        return res.status(404).json({message:"not founded"})
    }
    res.status(200).json({message:"sussec to update",newproduct})

}
const deletProduct=async(req,res)=>{
    const{id}= req.params;
    const delProduct=await productModel.findByIdAndDelete(id)
    if(!delProduct){return res.status(404).json({message:'not found to delete'})}
    res.status(200).json({message:'delete sucess',delProduct})
}
const getOneProduct=async (req,res)=>{
    const id=req.params.id;
    const data=await productModel.findById(id).populate("sellerId");
    if(!data){
       return res.status(404).json('not found product')
    }
    res.status(200).json(data)
  }

module.exports={addProduct,getAllProduct,updateProduct,deletProduct,getOneProduct}