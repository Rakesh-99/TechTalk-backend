import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const DB_URL = process.env.DB_URL;




const ConnectDB = async () => {

    try {
        await mongoose.connect(DB_URL);
        console.log('DB Connected!');

    } catch (err) {
        console.log(err);
    }
};

ConnectDB().catch((err) => {
    console.log('Error occurred while connecting to Database' + err);
});





export default ConnectDB;
