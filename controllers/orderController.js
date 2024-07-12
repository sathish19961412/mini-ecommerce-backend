const orderModel=require('../models/orderModels');

exports.createOrder =(req,res,next)=>{
    const cartItems=req.body;
    const amount=Number(cartItems.reduce((acc,item)=>(acc+item.product.price * item.qty),0)).toFixed(2);
    console.log(amount,'Amount');

    //orderModel.create()

     res.json({
        success:true,
        message:'Order Works!'
     })
}