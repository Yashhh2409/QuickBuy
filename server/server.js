const express = require('express')
const cors = require("cors")
const dotenv = require('dotenv').config()
const connectDB = require('../server/config/DB')
const connectCloudinary = require('./config/cloudinary')
const userRouter = require('./routes/userRoute')
const productRouter = require('./routes/productRoute')
const cartRouter = require('./routes/cartRoute')
const orderRouter = require('./routes/orderRoute')

// app config
const app = express()
const PORT = process.env.PORT || 5000
connectDB(); // Database Connection
connectCloudinary();

// to fix cors problem in vercel
const corsOptions = {
    origin: ['https://quickbuy-ten.vercel.app', 'https://quickbuy-admin-iota.vercel.app'],
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization', 'token'],
     credentials: true,
};

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors(corsOptions));

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get("/", (req, res)=> {
    res.send("Api working")
})

app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
    
})
