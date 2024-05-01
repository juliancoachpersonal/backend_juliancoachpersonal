import mongoose from "mongoose";

const opinionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profession: {
        type: String
    },
    rating: {
        type: String,
        required: true
    },
    opinion: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

}, {
    timestamps: true
})

export default mongoose.model("Opinion", opinionSchema)