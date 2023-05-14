import express from "express";
import { authUser, createUser, getUserProfile } from "../controller/userController";
import protectValidUser from "../middleware/authMiddleWare";



const router = express.Router()

router.post("/login",authUser)
router.route("/profile").get(protectValidUser,getUserProfile)
router.post("/").post(createUser)

export default router