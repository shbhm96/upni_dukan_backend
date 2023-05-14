import express from 'express';
import dotenv from "dotenv";
import products from "./data/products.js";
import connectMongooseDB from './config/database.js';
import colors from 'colors';
import productRoutes from "./routes/productsRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import { authUser } from './controller/userController.js';

dotenv.config()

connectMongooseDB()

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("API is running....")
})

app.use("/api/products",productRoutes)
app.use("/api/users",authUser)

app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`))