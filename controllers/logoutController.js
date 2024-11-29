const TokenBlacklist = require("../models/Blacklisttoken");



// helps to logout the user
exports.logout=async function(req,res){
try{
    const token =req.header('Authorization')?.split(' ')[1];
    if(!token){
        return res.status(401).send({message:'Access Denied'});
    }

   await TokenBlacklist.create({token});
    res.status(200).json({msg:"logout successfully"})
}
catch(err){
    res.status(500).json({msg:"An error occured during logout"})
}
}