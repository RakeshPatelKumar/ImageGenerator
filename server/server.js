import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from './routes/userRoutes.js'; 
import imageRouter from "./routes/imageRoutes.js";

const port = process.env.PORT || 4000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Database (Use async function)
const startServer = async () => {
    try {
        await connectDB(); // Now properly awaited inside async function

        // Routes
        app.use('/api/user', userRouter);
        app.use('/api/image', imageRouter); 

        app.get("/", (req, res) => res.send("API Working"));

        // Start Server
        app.listen(port, () => console.log(`🚀 Server started on PORT: ${port}`));
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit on failure
    }
};

startServer(); // ✅ Call the async function
