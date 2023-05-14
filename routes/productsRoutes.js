import express from "express";
import asyncHandler from "express-async-handler"
import Product from "../models/productModel.js";

const router = express.Router()

//Fetch all Products
//GET /api/priducts
//No Token required public routes
router.get("/",asyncHandler(async(req,res)=>{
    const products= await Product.find({});
    throw new Error("Bagg sala")
    
}))


//Fetch one Products
//GET /api/priducts/:id
//No Token required public routes
router.get("/:id",asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error("Product Not Found")
    }
    res.json(product)
}))

export default router