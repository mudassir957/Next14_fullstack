import mongoose from "mongoose"

let isConnected = false;

export const connectToDb = async () => {

    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log("Using existing connection");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO, {
            dbName: "next14",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true
        console.log("connected successfully!")
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};