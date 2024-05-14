const userModel=require('../modules/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const signUp=async(req,res)=>{
    const{userName,email,password,cpassword}=req.body;
    if(password !=cpassword) {return res.json({message:'password not match cpassword'})};
    const foundedUser=await userModel.findOne({email:email})
    if(foundedUser){
        res.status(400).json({message:'user aready exist'})
    }
    else{
        const hashedPassword=bcrypt.hashSync(password,10)
        const newUser=await userModel.insertMany({userName,email,password:hashedPassword})
        res.status(200).json({message:'add sucess',newUser})

    }
    


};
const sigIn=async(req,res)=>{
    let{email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({message:'you must enter email and password'});

    }
    let foundedUser=await userModel.findOne({email});
    if(!foundedUser)
    {
        return res.status(404).json({message:'you must register first'});

    }
    let matched= bcrypt.compareSync(password,foundedUser.password);
    if(matched)
    {
        let token=await jwt.sign({id:foundedUser._id,Name:foundedUser.userName},process.env.SECRET_KEY)
        res.status(200).json({message:'welcom',token:token});
        
    }
    else{
        return res.status(400).json({message:'incorrect password'});

    }
    
}
const getAllUsers=async (req,res)=>{
    try{
        const{email}=req.body
        let users = await userModel.find(email);
        res.status(201).json({message:"Successfully",data:users});
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
const getSingleUser= async (req,res)=>{
    const {id} = req.params;
    const singleUser=await userModel.findById(id);
    res.json({message:susses,singleUser});
 }
 const updateUser=async (req,res)=>{
    const {id}=req.params;
    const {userName,password,orders}=req.body;
    const updateUser=await userModel.findByIdAndUpdate(id,{userName,password,orders},{new:true})
    if (!updateUser) {
       return res.status(404).json("No found.");
     }
     res.status(200).json({user: updateUser});
} 
const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await userModel.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).json('Id Not Found');
        }
        res.status(200).json('User Deleted Successfully');
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports={signUp,sigIn,getAllUsers,getSingleUser,updateUser,deleteUser}