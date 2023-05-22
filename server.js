import express from 'express';
import dotenv from "dotenv";
import products from "./data/products.js";
import connectMongooseDB from './config/database.js';
import colors from 'colors';
import productRoutes from "./routes/productsRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import { authUser } from './controller/userController.js';
import cors from 'cors'

dotenv.config()

connectMongooseDB()

const app = express()

app.use(express.json())

app.use(cors())

app.get('/',(req,res)=>{
    res.send("API is running....")
})

app.use("/api/test",(req,res)=>{
    res.send("TEST SUCCESSFULL")
})
app.use("/api/products",productRoutes)
app.use("/api/users",userRoutes)
app.use("/api/orders",orderRoutes)

app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(PORT,
    console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`.cyan.bold)
    )