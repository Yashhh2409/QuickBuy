import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../Components/RelatedProducts";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import moment from 'moment'

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, backendURL } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [reviews, setReviews] = useState([]); // Reviews state to hold reviews data
  const [reviewText, setReviewText] = useState(""); // Review text input
  const [reviewRating, setReviewRating] = useState(0); // Rating state for review

  // Fetch product data from context based on productId from the URL
  useEffect(() => {
    if (products && products.length > 0) {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setProductData(product);
        setImage(product.image[0]);
      } else {
        console.error("Product not found in context");
      }
    }
  }, [products, productId]);

  // Fetch reviews for the product
  const fetchReviews = async () => {
    try {
      const reviewsUrl = `${backendURL}/api/product/reviews/${productId}`;
      const reviewsResponse = await axios.get(reviewsUrl);

      if (reviewsResponse.data.success) {
        setReviews(reviewsResponse.data.message || []); // Set reviews if successful
      } else {
        console.error("Reviews not found.");
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  // Handle submitting a new review
  const handleReviewSubmit = async () => {
    try {
      const newReview = {
        rating: reviewRating,
        text: reviewText,
        date: moment(new Date()).format('MMMM D, YYYY, h:mm A')

      };

      // Send the new review to the backend
      const response = await axios.post(
        `${backendURL}/api/product/reviews/${productId}`,
        newReview
      );

      if (response.data.success) {
        // Fetch updated reviews after submission
        fetchReviews();
      } else {
        console.error("Failed to submit review.");
      }

      // Clear the review form
      setReviewText("");
      setReviewRating(0);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  // Calculate the average rating of the product from reviews
  const calculateAverageRating = () => {
    if (!Array.isArray(reviews) || reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1);
  };

  // Fetch reviews when productData changes
  useEffect(() => {
    if (productData) {
      fetchReviews();
    }
  }, [productData]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data Rendering */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, idx) => (
              <img
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                src={item}
                key={idx}
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          {/* Rating & Reviews */}
          <div className="flex items-center gap-1 mt-2">
            {Array.from({ length: 5 }, (_, index) => (
              <img
                key={index}
                src={index < calculateAverageRating() ? assets.star_icon : assets.star_dull_icon}
                alt="star"
                className="w-3 5"
              />
            ))}
            <p className="pl-2">({reviews.length} Reviews)</p>
          </div>

          {/* Price */}
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          {/* Size selection */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, idx) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-orange-500" : ""}`}
                  key={idx}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart button */}
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* Description & Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews ({reviews.length})</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Our website offers a seamless shopping experience with a wide range of clothing options for all ages.
          </p>
          <p>Customers love the variety and quality of products, making our website a go-to destination for their fashion needs.</p>
        </div>

        {/* Review Form */}
        <div className="mt-10">
          <h3 className="text-xl font-medium">Add a Review</h3>
          <div className="flex flex-col gap-4 mt-4">
            <div>
              <label className="block text-sm">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <img
                    key={star}
                    src={star <= reviewRating ? assets.star_icon : assets.star_dull_icon}
                    alt={`star-${star}`}
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setReviewRating(star)}
                  />
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm">Review</label>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                rows="4"
                className="border w-full px-4 py-2"
                placeholder="Write your review..."
              ></textarea>
            </div>
            <button
              onClick={handleReviewSubmit}
              className="bg-black text-white px-8 py-3 text-sm mt-4"
            >
              Submit Review
            </button>
          </div>
        </div>

        {/* Display Reviews */}
        <div className="mt-10">
          <h3 className="text-xl font-medium">Reviews</h3>
          <div className="flex flex-col gap-4 mt-4">
            {reviews.map((review, idx) => (
              <div key={idx} className="border p-4">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, idx) => (
                    <img
                      key={idx}
                      src={idx < review.rating ? assets.star_icon : assets.star_dull_icon}
                      alt={`star-${idx}`}
                      className="w-4 h-4"
                    />
                  ))}
                  <p className="text-gray-500 text-sm">{moment(review.date).format('MMMM D, YYYY, h:mm A')}
                  </p>


                </div>
                <p className="mt-2">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Display Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;
