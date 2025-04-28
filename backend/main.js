const express=require('express');
const server=express();
server.use(express.json());
const cors = require("cors");
server.use(cors());
const productController=require('./controller/productController')
const userController=require('./controller/UserController')


server.get('/products',productController.getProducts);
server.post('/login',userController.Login)
server.post('/signup',userController.createUser)
server.post('/user',userController.verification)

server.listen(8080,()=>{
    console.log("Server is On✅")
})