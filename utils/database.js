import mongoose from "mongoose";

let isConnected = false;//Track the connection

export const connectToDB = async () => {
    console.log("Attempting to connect to MongoDB...");
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log("Mongo is connected😁");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            // useUnifiedTopology: true
        })

        isConnected = true;
        console.log("Mongodb is connected😁");
    } catch (error) {
        console.log("Mongodb is not connected😒");
        console.log(error);
    }
}