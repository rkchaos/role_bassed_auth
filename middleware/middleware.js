
// middleware to check the current user is admin or superadmin if yes then move to next if not send a msg in the form of json
const isadminorsuperadmin=(req,res,next)=>{
    if(req.user.role=="admin"|| req.user.role=="superadmin"){
        next()
    }
    else{
        res.status(403).json({msg:"Access Denied"})
    }
}
const superadmin=(req,res,next)=>{
    if(req.user.role=="superadmin"){
        next()
    }
    else{
        res.status(403).json({msg:"Access Denied you not superadmin"})
    }
}

module.exports={isadminorsuperadmin,superadmin}