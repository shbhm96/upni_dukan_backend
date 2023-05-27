import express from "express";
import adminRoutes from "./adminRoutes.js"
import uploadRoutes from "./uploadRoutes.js"
import productRoutes from "./productsRoutes.js"
import userRoutes from "./userRoutes.js"
import orderRoutes from "./orderRoutes.js"


const router = express.Router()

router.route("/test",(req,res)=>{
    res.send("TEST SUCCESSFULL")
})

router.get('/',(req,res)=>{
    res.send("API is running....")
})

router.route("/products",productRoutes)
router.route("/users",userRoutes)
router.route("/orders",orderRoutes)
router.route("/admin",adminRoutes)
router.route("/upload",uploadRoutes)



export default router