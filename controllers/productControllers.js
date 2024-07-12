const ProductModels=require('../models/productModels');

//Get Products API - /api/v1/products
exports.getProducts=async (req,res,next)=>{
      const query=req.query.keyword?{name:{
         $regex:req.query.keyword,
         $options:'i'
      }}:{}
      const products = await ProductModels.find(query);
      res.json({
         success:true,
         products
      })
}

//Get Single Product API - /api/v1/product/:id 
exports.getSingleProducts= async (req,res,next)=>{
   try{
      const product = await ProductModels.findById(req.params.id);
      res.json({
         success:true,
         product
      })
   }catch(error){
       res.status(404).json({
         success:false,
         message:'Unable to get Products that ID'
       })
   }
    
}