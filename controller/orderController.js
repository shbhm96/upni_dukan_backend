import asyncHandler from "express-async-handler"
import Order from "../models/orderModel.js";

//Create new Order
//POT /api/priducts
//Token required private routes

const addOrderItems = asyncHandler(async(req,res) => {
    console.log("add order")
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        taxPrice,
        itemsPrice,
        shippingPrice,
        totalPrice
    } = req.body
    if(orderItems && orderItems.length == 0){
        res.send(400)
        throw new Error("No Order Items")
        return
    }else{
        const order = new Order({
        orderItems,
        user:req.user._id,
        shippingAddress,
        paymentMethod,
        taxPrice,
        itemsPrice,
        shippingPrice,
        totalPrice
        })
        console.log("Order va",order)
        const createdOrder= await order.save()
        console.log("kl",createdOrder)
        res.status(201).json(createdOrder)
    }
})

const getOrderById = asyncHandler(async(req,res) => {

    const order = await Order.findById(req.params.id).populate('user','name','email')
    console.log("Order Found")

    if(order){
        res.status(201).json(order)
    }else{
        res.status(401)
        throw new Error('Order Not Found')
    }    
})

export {addOrderItems,getOrderById}