const express=require('express');
const { signUp, sigIn, getAllUsers, getSingleUser, updateUser, deleteUser } = require('../controller/userController');
const userRouter=express.Router();
userRouter.post("/signup",signUp);
userRouter.post("/signin",sigIn);
userRouter.get("/",getAllUsers);
userRouter.get("/:id",getSingleUser);
userRouter.patch("/:id",updateUser);
userRouter.delete("/:id",deleteUser);
module.exports=userRouter