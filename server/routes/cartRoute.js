const express = require('express')
const {addToCart, updateCart, getUserCart} = require('../controllers/cartControllers')
const authUser = require('../middleware/auth')

const cartRouter = express.Router()

cartRouter.post('/get', authUser, getUserCart)
cartRouter.post('/add', authUser, addToCart)
cartRouter.post('/update', authUser, updateCart)

module.exports = cartRouter