const mongoose = require('mongoose');
const Product = require('./models/Product');





const productArray=[
    {
        name:"Iphone",
        price:"1000",
        description:"This is a phone",
        image:"https://plus.unsplash.com/premium_photo-1681396658834-b56190480934?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww"

    },
    {
        name:"Samsung",
        price:"800",
        description:"This is a best of best",
        image:"https://images.unsplash.com/photo-1691449808001-bb8c157f0094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fHww"
    },
    {
        name:"Sony",
        price:"1200",
        description:"This is a best phone",
        image:'https://images.unsplash.com/photo-1531384739997-aae7e407f2d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29ueSUyMHBob25lfGVufDB8fDB8fHww'
    }

]


async function seedProduct(){
 try{
await Product.insertMany(productArray)
console.log("products seeded")
 }
 catch(err){
    console.log(err)
 }
}
module.exports=seedProduct