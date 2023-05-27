import path from "path"
import express from 'express';
import dotenv from "dotenv";
import connectMongooseDB from './config/database.js';
import colors from 'colors';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import rootRouter from "./routes/rootRouter.js"
import cors from 'cors'
import serverless from "serverless-http"


dotenv.config()
connectMongooseDB()

const app = express()

app.use(express.json())
app.use(cors())

app.use("/.netlify/functions/api",rootRouter)


const __dirname = path.resolve()
app.use("/uploads",express.static(path.join(__dirname,'/uploads')))



app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`.cyan.bold))


module.exports.handler = serverless(app)
