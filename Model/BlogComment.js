import mongoose from "mongoose";



const commentSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    blogId: {
        type: String,
        required: true
    }
});




// Comment Model :

export const commentModel = mongoose.model('comment', commentSchema);



