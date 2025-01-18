const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const productModel = require("../models/productModel");

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

// function for add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    // getting images from multer
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesURL = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesURL,
      date: Date.now(),
    };
    console.log(productData);

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: error.message });
  }
};

// finction for list product
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for removing product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for single info
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);

    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: true, message: error.message });
  }
};

// function for add review of product
const addReview = async (req, res) => {
  try {

    const {id} = req.params;
    const {rating, text} = req.body;

    // find product by id
    const product = await productModel.findById(id);

    if(!product) {
      return res.json({success: false, message: "Product not found"})
    }

    // create a new review
    const newReview = {
      rating,
      text,
      date: new Date()
    }

    // add the review to the product
    product.reviews.push(newReview);
    await product.save();

    res.json({success: true, message: "Review added successfully", reviews: product.reviews});
    
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message})
  }

}

// function for get reviews of a product
const getProductReviews = async (req, res) => {
  try {

    const {id} = req.params;

    // find product by if in mongoDB
    const product = await productModel.findById(id);

    if(!product) {
      return res.json({success: false, message: "Product not found"})
    }

    res.json({success: true,  message: product.reviews});
    
  } catch (error) {
    res.json({success: false, message: error.message})
  }
}

module.exports = { addProduct, listProducts, removeProduct, singleProduct, addReview, getProductReviews };
