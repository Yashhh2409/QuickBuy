const mongoose = require("mongoose");

const connectDB = async () => {

  mongoose.connection.on('connected', () => {
    console.log("Database connected successfully.");
    
  })

  await mongoose.connect(`${process.env.MONGODB_URL}/QuickBuyDB`)
};

module.exports = connectDB;
