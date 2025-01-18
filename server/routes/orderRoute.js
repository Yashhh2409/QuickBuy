const express = require('express')
const {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe} = require('../controllers/orderController')
const adminAuth = require('../middleware/adminAuth')
const authUser = require('../middleware/auth')

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// Payment Features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)

// User Feature
orderRouter.post('/userorders', authUser, userOrders)

// Verify Payment
orderRouter.post('/verifyStripe', authUser, verifyStripe)

module.exports = orderRouter