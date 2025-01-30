import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import connectCloudinary from "./configs/cloudinary.js";
import userRouter from "./routes/userRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 3000;

// Connect DB
connectDB();

// Connect Cloudinary
connectCloudinary;

// Middlewares
app.use(express.json());
app.use(cors());

// Api Endpoints
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
