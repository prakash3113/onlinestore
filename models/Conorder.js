import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema.Types

const cartSchema  = new mongoose.Schema({
    user:{
        type:ObjectId,
        ref:"Conorder"
    },
    products:[
        {
            quantity:{type:Number,default:1},
            product:{type:ObjectId,ref:"conorder"}
       }
    ]
})


export default mongoose.models.Conorder || mongoose.model("Conorder",cartSchema)



// {
//     user:"214234214",
//     products:[{_id:"2213123",quantity:1,product:"324534"},{_id:"2313124",quantity:3,product:"5464654"},]
// },
// {
//     user:"wrrwefwfw",
//     products:[{quantity:1,product:"3424"},{quantity:1,product:"32423"},]
// },