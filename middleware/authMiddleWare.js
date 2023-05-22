import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import User from "../models/usersModel.js";
import dotenv from "dotenv";

const protectValidUser = asyncHandler(async(req,res,next)=>{
    let token;
    console.log(req.header.authorization)
    dotenv.config()

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select("-password")
            console.log("Token Found")
            next()
        }catch(error){
            console.log(error)
            res.status(401)
            throw new Error("Not Authorized Token, Token Failed")

        }
        
    }
    if(!token){
        res.status(401)
        throw new Error("Not Authorized or Not Token")
    }    
})

export default protectValidUser