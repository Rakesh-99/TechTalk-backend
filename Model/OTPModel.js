import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 10000, // Set the expiration time for the OTP (in seconds)
    },
});

const OtpModel = mongoose.model('Otp', otpSchema);

export default OtpModel;
