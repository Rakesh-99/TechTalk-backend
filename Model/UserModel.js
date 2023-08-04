import mongoose, { mongo } from "mongoose";

const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;




// User Schema  :


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        match: regEx,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    userrole: {
        type: String,
        required: true
    },
    emailToken: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false

    },
    date: {
        type: Date,
        default: Date.now()
    }
});



// User Model :

export const userModel = mongoose.model('userinfo', userSchema);