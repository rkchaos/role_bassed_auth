const express=require("express")
const router=express.Router()
const loginController=require("../controllers/login")
const authenticationJWT=require("../utils/authmiddleware")
const middle=require("../middleware/middleware")



router.post("/login",loginController.login)
router.get("/All_user",authenticationJWT.authenticationJWT,middle.isadminorsuperadmin,loginController.alluser)
router.delete("/user/:id",authenticationJWT.authenticationJWT,middle.superadmin,loginController.deleteUser)

module.exports=router

