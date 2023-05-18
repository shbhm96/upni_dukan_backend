import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import User from "../models/usersModel.js";
import dotenv from "dotenv";

const protectValidUser = asyncHandler(async(req,res)=>{
    let token;
    console.log(req.header.authorization)
    dotenv.config()

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select("-password")

            next()
        }catch(error){
            console.log(error)
            res.status(401)
            throw new Error("Not Authorized Token, Token Failed")

        }
        console.log("Token Found")
    }
    if(!token){
        res.status(401)
        throw new Error("Not Authorized or Not Token")
    }    
})

export default protectValidUser