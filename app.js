const express=require('express');
const app=express();
const path=require('path');
const connectDatabase=require('./config/connectDatabase');
const dotenv=require('dotenv');
dotenv.config({path: path.join(__dirname,'config','config.env')})

const products=require('./routes/products');
const orders=require('./routes/order')

connectDatabase();

app.use('/api/v1/',products);
app.use('/api/v1/',orders);

app.listen(process.env.PORT,()=>{
    console.log(`Server Listening to the Port ${process.env.PORT}  in ${process.env.NODE_ENV}`);
})
