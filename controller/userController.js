import asyncHandler from "express-async-handler"
import User from "../models/usersModel.js";
import generateToken from "../utils/generateTokens.js";


//Fetch all Products
//GET /api/priducts
//No Token required public routes
const authUser = asyncHandler(async(req,res) => {
    console.log("34567")
    const {email,password} = req.body

    const user = await User.findOne({email})
    console.log("control",user)

    if(user && (await user.matchPassword(password))){
        return res.json({
            _id : user._id,
            name : user.name,
            email:user.email,
            isAdmin : user.isAdmin,
            token : generateToken(user._id)
        })        
    }else{
        res.status(401)
        throw new Error ('Invalid email or password')
    }

    res.send({email,password})
})

const getUserProfile = asyncHandler(async(req,res) => {
    const user = await User.findById(req.user._id)

    if(user ){
        return res.json({
            _id : user._id,
            name : user.name,
            email:user.email,
            isAdmin : user.isAdmin,
            token : generateToken(user._id)
        })        
    }else{
        res.status(404)
        throw new Error ('User Not Found')
    }

    res.send({email,password})
})

const createUser = asyncHandler(async(req,res) => {
    const {name, email,password} = req.body

    const userExist = await User.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error("User Already Exist")
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if(user){
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email:user.email,
            isAdmin : user.isAdmin,
            token : generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Invalid User Data")
    }
})
export {authUser,getUserProfile,createUser}