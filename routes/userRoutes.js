import express from "express";
import { authUser, createUser, getUserProfile } from "../controller/userController.js";
import protectValidUser from "../middleware/authMiddleWare.js";



const router = express.Router()

router.post("/login",authUser)
router.route("/profile").get(protectValidUser,getUserProfile)
router.post("/").post(createUser)

export default router