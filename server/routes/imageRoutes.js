import express from 'express';
import { generateImage } from '../controllers/imageController.js';
import authUser from '../middlewares/auth.js';

const imageRouter = express.Router();

// ✅ Correct route path
imageRouter.post('/generate-image', authUser, generateImage);

export default imageRouter;
