import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config()

const generateToken = (id)=>{
    console.log("gen toekn")
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}

export default generateToken;