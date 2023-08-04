import mongoose from "mongoose";


// Blog Schema  :


const blogSchema = new mongoose.Schema({

    category: {
        type: String,
        // required: true
    },
    mainHeading: {
        type: String,
        // required: true,
    },
    heading: {
        type: String,
        // required: true,
    },

    description: {
        type: String,
        // required: true,
    },

    image: {
        type: String,
    }
});


// User Model :

export const blogModel = mongoose.model('userBlog', blogSchema);