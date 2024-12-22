import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost/tarea3");
        console.log("db Connected")
    } catch (error) {
        console.log(error);
    }
}