const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(`${process.env.connectionURL}`)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.error("unable to connect Database", error);
    });
};

module.exports = connectDB;
