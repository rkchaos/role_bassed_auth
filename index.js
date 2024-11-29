const express=require('express')
const app=express()
const dotenv=require("dotenv").config()
const mongoose = require('mongoose');
const seedProduct=require("./seed")
const productRoute=require("./routes/productsRouter")
const userRoute=require("./routes/signup")
const loginRouter=require("./routes/login")
const logutRouter=require("./routes/logout")
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB connected")
})
.catch((err)=>{
    console.log(err)
})

app.use(express.json())


// seedProduct()

app.use(productRoute)
app.use(userRoute)
app.use(loginRouter)
app.use(logutRouter)









app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})