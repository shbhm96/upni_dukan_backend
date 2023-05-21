import express from "express";
import { addOrderItems, getOrderById } from "../controller/orderController.js";
import protectValidUser from "../middleware/authMiddleWare.js";


const router = express.Router()

router.post("/",protectValidUser,addOrderItems)
router.get("/:id",protectValidUser,getOrderById)

export default router