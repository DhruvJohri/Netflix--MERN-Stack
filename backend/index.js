//step-1
// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dotenv.config();
databaseConnection();

const app = express();
//middlewares 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:3000")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

const corsOptions = {
    origin:(origin, callback) => {
        if(!origin || allowedOrigins.includes(origin)){
            return callback(null, true);
        }
        return callback(new Error("Not allowed by CORS"));
    },
    credentials:true
}
app.use(cors(corsOptions));
 
// api
app.use("/api/v1/user", userRoute);

const port = process.env.PORT || 8080;

app.listen(port,() => {
    console.log(`Server listen at port ${port}`);
});
