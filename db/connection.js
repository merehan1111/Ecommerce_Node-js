const mogoose =require('mongoose');
const initconnection=()=>{
mogoose.connect('mongodb://localhost:27017/E-commerce')
.then(()=>{
    console.log('connect DB sucess');
}).catch((err)=>{
    console.log("db error",err);
})
}
module.exports=initconnection