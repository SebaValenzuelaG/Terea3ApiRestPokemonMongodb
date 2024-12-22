import mongoose, { Types } from "mongoose";

const userSchema= new mongoose.Schema({
         username:{
            type: String,
            required: true,
            trim:true,
            unique:true
        },
        password:{
            type: String,
            required: true,
        }
        ,
        role:{
            type: String,
            required: true,
        } 
        
    
}, {
    timestamps: true
})

export default mongoose.model('User',userSchema)