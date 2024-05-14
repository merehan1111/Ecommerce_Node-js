const sellerModel=require('../modules/seller');
const productModel=require('../modules/product')
const addSeller=(req,res)=>{
    try{
    const {Name}=req.body;
    const addSeller=sellerModel.create({Name});
    if(!addSeller){return res.status(400).json({message:"add field"})}
    res.status(200).json({message:"add succes"})

    }catch(err)
    {
        res.status(500).json({message:err.message})
    }

}
const getAllSeller=async(req,res)=>{
    try{
        const allSeller=await sellerModel.find();
        res.status(200).json({message:'get sucess', data:allSeller})

    }catch(err){
        res.status(500).json({mesage:err.mesage})
    }

};
const updateProductBySeller=async(req,res)=>{
    const {_id}=req.params.productId;
    const {seller}=req.params.sellerId;
    const {Name}=req.body;
    const newProduct=await productModel.findByIdAndUpdate(_id,seller,{Name},{new:true})
    if(!newProduct){return res.status(404).json({mesage:'not found'})}
    res.status(200).json({mesage:'updated sucess'})
};
const deletProductBySeller=async(req,res)=>{
    try{
    const{_id}=req.params.productId;
    const{seller}=req.params.sellerId;
    const delSeller=await productModel.findByIdAndDelete(_id,seller)
    if(!delSeller){
        return res.status(404).json({mesage:'not found to delet'})
    }
    res.status(200).json({message:'deleted succes',delSeller})
    }catch(err){
        res.status(500).json({ message: error.message });

    }
};
const addProductBySeller=async(req,res)=>{
    
    try{
        const{sellerId}=req.params;
        const photo=req.file.filename
         const{Name,description}=req.body;
         const seller = await sellerModel.findById(sellerId);
         if(!seller){ return res.status(404).json({ message: 'Seller not found.' });}
         const newProduct=await productModel.create({photo,Name,description,sellerId})
    
         res.status(200).json({message:'added succes',newProduct})
     }catch(err){
         res.status(500).json({message:err.message})

}
}
const getAllProductBySeller=async(req,res)=>{
    try{

        let{id}=req.params;
        const products= await productModel.find({sellerId:id}).populate('sellerId');
        res.status(200).json(products);
    }catch(err){
        res.status(500).json({message:err.message})
    }
   

}



module.exports={addSeller,getAllSeller , updateProductBySeller,deletProductBySeller,getAllProductBySeller,addProductBySeller}