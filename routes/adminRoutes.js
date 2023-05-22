import express from "express"
import { getAllUsersForAdmin } from "../controller/adminController"
import {protectValidUser, isAdminUser } from "../middleware/authMiddleWare.js";

const router = express.Router()

router.get("/allusers",protectValidUser,isAdminUser,getAllUsersForAdmin)