import mongoose from "mongoose";

export async function connect() {
    try{
        mongoose.connect('mongodb://localhost:27017/ratify');
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("Connected Successfully");
        })

        connection.on('error', (err) => {
            console.log("MongoDB connection error. Please make sure MongoDB is running." + err);
            process.exit();
        })
    } catch (error) {
        console.log('Something went wrong!');
        console.log(error)
    }
}