import asyncHandler from "express-async-handler"
import Product from "../models/productModel.js";


//Fetch all Products
//GET /api/priducts
//No Token required public routes
const getProducts = asyncHandler(async(req,res) => {
    const products= await Product.find({});
    
    res.json(products)


})

const getProductById = asyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error("Product Not Found")
    }
    res.json(product)
})

export {getProductById,getProducts}