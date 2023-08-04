import express from 'express';
const router = express.Router();
import { getUser, addSignupUser, loginUser, blog, getAllBlogs, getParticularBlog, userComment, getComment, otpVerify } from '../Controller/UserController.js';

import upload from '../utils/multersetup.js';



// Post Api : 
router.post('/signup', addSignupUser);
router.post('/login', loginUser);
router.post('/blog', upload.single('image'), blog);
router.post('/comment', userComment);


// Get Api : 
router.get('/', getUser);
router.get('/getblogs', getAllBlogs);
router.get('/getparticularblog/:id', getParticularBlog);
router.get('/comment', getComment);
router.post('/otpverify', otpVerify);


export default router;