import express from "express";
import { authUser, createUser, getUserProfile } from "../controller/userController.js";
import protectValidUser from "../middleware/authMiddleWare.js";



const router = express.Router()

router.post("/login",authUser)
router.get("/profile",protectValidUser,getUserProfile)
router.post("/",createUser)

export default router