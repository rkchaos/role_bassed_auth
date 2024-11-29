const bcrypt = require('bcrypt');
const User = require('../models/User');
const {generateToken}=require("../utils/jwtutils")


// login function help to  login the already register user and at that step when user login it generate a token 
async function login(email,password){
try{
    let existingUser=await User.findOne({email})
if(!existingUser){
    throw new Error("User not found")
}

const isPassword=await bcrypt.compare(password,existingUser.password)
if(!isPassword){
    throw new Error("Invalid password")
}
const token =generateToken(existingUser)
return token
}
catch(err){
    throw new Error("Invalid credentials")
}
}


module.exports={login}