import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://coachpersonaljulian:0uBw52eYM3StnL59@juliancoachpersonal.pzynrgh.mongodb.net/?retryWrites=true&w=majority&appName=JulianCoachPersonal')
        // await mongoose.connect('mongodb://127.0.0.1/julian-coach-personal')
        console.log('DB conected successfully!')
    } catch (error) {
        console.log(error)
    }
}