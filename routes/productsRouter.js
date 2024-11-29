const express=require('express')
const router=express.Router()
const productController=require("../controllers/productsControllers")
const authenticationJWT=require("../utils/authmiddleware")
const middle=require("../middleware/middleware")

router.get("/products",authenticationJWT.authenticationJWT,productController.products)
router.post("/Add_products",authenticationJWT.authenticationJWT,middle.isadminorsuperadmin,productController.allproducts)
router.delete("/products/:id",authenticationJWT.authenticationJWT,middle.superadmin,productController.delete)













module.exports=router