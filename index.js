
const express= require('express');
const mongoose=require('mongoose');
const initconnection = require('./db/connection');
const proRouter = require('./routes/productRoutes');
const sellRouts = require('./routes/sellerRoutes');
const ordRoutes = require('./routes/orderRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();
app.use(express.json());
initconnection();
app.use("/sellers",sellRouts);
app.use("/products",proRouter);
app.use("/orders",ordRoutes);
app.use("/user",userRouter);
//app.use("/",userRouter);



app.listen(3000,()=>{
    console.log(`sucess to conect port 3000`);
})
