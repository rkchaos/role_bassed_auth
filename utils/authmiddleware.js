const jwt = require("jsonwebtoken")
const secret = require("../controllers/jwtConfig");
const TokenBlacklist = require("../models/Blacklisttoken");

// authenticationJWT helps too verify the token 
const authenticationJWT = async(req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ msg: "Access token is missing or invalid" })
    }
    try {
        const blacklistedTokens=await TokenBlacklist.findOne({token});
        if(blacklistedTokens) return res.status(401).json({ msg: "Access token is invalid"})
        const decode = jwt.verify(token, secret.secret);
        req.user = decode;
        next()
    }
    catch (err) {
        return res.status(401).json({ msg: "Invalid token" })
    }
}
function verifyToken(token) {
    return jwt.verify(token, secret.secret);
}

module.exports = { authenticationJWT, verifyToken }