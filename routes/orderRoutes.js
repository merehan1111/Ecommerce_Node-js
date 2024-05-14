const express=require('express');
const { addOrder, getAllOrder, updateOrder, deleteOrder } = require('../controller/orderController');
const orderModel = require('../modules/order');
const ordRoutes=express.Router();
ordRoutes.post("/",addOrder);
ordRoutes.get("/",getAllOrder);
ordRoutes.patch('/:id',updateOrder);
ordRoutes.delete('/:id',deleteOrder);



module.exports=ordRoutes