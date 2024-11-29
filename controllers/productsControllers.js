const Product = require("../models/Product")




// This function help to get all the product from database 
exports.products=async(req,res)=>{
    try{
        const products =await Product.find()
        if(!products){
            return res.status(404).json({message:"No products found"})
        }
        res.status(200).json(products)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}
// this function helps to add products
// and it is done by admin and superadmin others get a message access denied 
exports.allproducts=async(req,res)=>{
    try{
       let{name,price,description,image}=req.body;
       let products=await Product.insertMany(req.body)
       res.status(201).json(products)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}
// this function help to delete product and it is only done by superadmin others get a message access denied
exports.delete=async(req,res)=>{
    try{
let{id}=req.params
let product=await Product.findByIdAndDelete(id)
if(!product){
    return res.status(404).json({message:"No product found"})
    }

    res.status(200).json({msg:"product delete successfully"})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}