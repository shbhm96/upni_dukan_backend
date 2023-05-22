import asyncHandler from "express-async-handler"
import User from "../models/usersModel.js";
import generateToken from "../utils/generateTokens.js";


const getAllUsersForAdmin = asyncHandler(async(req,res) => {
    const users = await User.findById({})
    res.send(users)
})

export {getAllUsersForAdmin}