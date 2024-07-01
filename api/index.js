import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

/**
 * Configure .env file to store secret key
 */
dotenv.config();

/**
 * Connect with mongoDb
 */
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

/**
 * Enable json
 */
app.use(express.json());

/**
 * Enable server on port 3000
 */
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

/**
 * API routes
 */
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

/**
 *  Middleware on handle error
 */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
