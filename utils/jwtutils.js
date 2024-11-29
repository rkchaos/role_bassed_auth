// It help to generate token
const jwt=require('jsonwebtoken')
const {secret}=require("../controllers/jwtConfig")

function generateToken(user){
    // payload is basically when i console the req.user(current user) it give me payload of user which have id,name,email,role
    const payload={
        id:user._id,
        name:user.name,
        email:user.email,
        role:user.role
    }
    return jwt.sign(payload,secret,{expiresIn:"4h"})
}
module.exports={
    generateToken
}