const MONGO_URl:any = process.env.MONGODB_URL;
import mongoose from "mongoose";

const connectMongo = async () => {
    try {
        const { connection } = await mongoose.connect(MONGO_URl);

        if (connection.readyState == 1) {
            console.log("Database is Connected");
        }

    }
    catch (errors) {
        return Promise.reject(errors);
    }

}  

export default connectMongo;