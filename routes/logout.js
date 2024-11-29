const express=require('express')
const router=express.Router()
const logoutController=require("../controllers/logoutController")
const auth=require("../utils/authmiddleware")

router.post("/logout",auth.authenticationJWT,logoutController.logout)


module.exports=router