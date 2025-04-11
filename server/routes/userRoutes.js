import express from 'express';
import { loginUser, registerUser, userCredits, paymentRazorpay, verifyRazorpay } from '../controllers/userController.js';
import authUser from '../middlewares/auth.js'; 

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/credits', authUser, userCredits);
userRouter.post('/Pay-razor', authUser, paymentRazorpay);
userRouter.post('/verify-razor', verifyRazorpay);

export default userRouter;
