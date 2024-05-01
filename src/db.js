import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING)
        // await mongoose.connect('mongodb://127.0.0.1/julian-coach-personal')
        console.log('DB conected successfully!')
    } catch (error) {
        console.log(error)
    }
}