import express from "express";
import { authUser, getUserProfile } from "../controller/userController";
import protectValidUser from "../middleware/authMiddleWare";



const router = express.Router()

router.post("/login",authUser)
router.route("/profile").get(protectValidUser,getUserProfile)

export default router