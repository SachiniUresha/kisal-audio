import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";



let app = express();

app.use(bodyParser.json());

let mongoUrl = "mongodb+srv://admin:123@cluster0.wwpux.mongodb.net/production?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl);

let connection = mongoose.connection;

connection.once("open",()=>{
    console.log("MongoDB connection established successfully...");
})

app.use("/api/users",userRouter)

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});



