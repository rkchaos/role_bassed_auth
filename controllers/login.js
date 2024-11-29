const User = require("../models/User")
const authservices = require("../services/login")

// it help to capture the email and password from req.body and send data to the folder ./service/login 
// forlder ./service/login return a token
exports.login = async function (req, res) {
    try {
        const { email, password } = req.body
        const token = await authservices.login(email, password)
        res.json({ token })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ msg: "invalid credentials" })
    }
}

// find all the user in the database
// this task is done by both admin and superadmin 
exports.alluser = async function (req, res) {
    try {
        let user = await User.find()
        res.status(200).json(user)
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ msg: "Server error " })
    }
}

// delete the user by their id and this task is only done by superadmin
exports.deleteUser=async function(req,res) {
    try{
let{id}=req.params
let user=await User.findByIdAndDelete(id)
res.status(200).json({msg:"user deleted successfully"})
    }
    catch(err){
        console.log(err)
        res.status(400).json({ msg: "Server error " })
    }
}