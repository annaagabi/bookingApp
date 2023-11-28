import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";

// const express = require "express"

const app = express()

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Conected to mongoDB.")

    } catch (error) {
        throw error;
        //res.status(500).json({error: error})
    }
};


mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!")
})
mongoose.connection.on("connected", () => {
    console.log("MongoDB connected!")
})

//middlewares
app.use(cookieParser())

app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

app.use((err, req, res, next) =>{
    // console.log("hi im a middleware!")

    // res.send("Hello from middleware!")

    // console.log("Hi middleware")
    // next()
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

app.listen(8800, () => {
    connect()
    console.log("Conected to backend.")
});