const express =require('express');
const multer=require('multer');
const path=require('path');
const{addProduct, getAllProduct, updateProduct, deletProduct, getOneProduct}=require('../controller/productController');
const auth = require('../middleware/auth');
const proRouter = express.Router();

//uploadPhoto
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,"../images"));
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload=multer({storage})
proRouter.post("/",upload.single("image"),auth,addProduct);
proRouter.get("/",getAllProduct)
proRouter.patch("/:id",auth,updateProduct);
proRouter.delete("/:id",deletProduct);
proRouter.delete("/:id",getOneProduct);

module.exports=proRouter