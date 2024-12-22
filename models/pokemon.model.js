import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
        trim:true,
    },
    name: {
        type: String,
        required: true,
        trim:true,
    },
    type: {
        type: String,
        required: true,
        trim:true,
    },
    level: {
        type: Number,
        required: true,
    },
    trainerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
  
    },{
    timestamps:true
    });

    export default mongoose.model('Pokemon', pokemonSchema )