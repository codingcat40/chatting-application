import mongoose from 'mongoose'



// connect db function

export const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log('Database connected'));

        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        console.log(error)
    }

}

