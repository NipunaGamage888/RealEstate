import express, { Router } from 'express';
const app =express();
import mongoose from 'mongoose';
import dotenv from "dotenv";
import router from "./routes/routes.js"
app.use(express.json())

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to the database")})
    .catch((err)=>{
        console.log(err)
    })


app.listen(3000,()=>{
    console.log('server is running')
})

app.use(router)