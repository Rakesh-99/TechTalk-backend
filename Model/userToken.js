import mongoose from "mongoose";


const tokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    }
});

const TokenModel = mongoose.model('token', tokenSchema);


export default TokenModel;