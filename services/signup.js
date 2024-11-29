const bcrypt=require("bcrypt");
const User = require("../models/User");




// createUser help to make a new user and store to mongodb
async function createUser(user){
    const{email,name,password}=user;
    let already=await User.findOne({email})
    if(already){
        throw new Error("Email already exist")
    }
    const hashedPassword=await bcrypt.hash(password,10)
    const createUser=new User({
        name:name,
        email:email,
        password:hashedPassword
    });
    const saveUser=await createUser.save();
    return saveUser;
}
module.exports={createUser};