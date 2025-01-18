import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10)); // Fetch the latest 10 products
  }, [products]);

  return (
    <div className="my-10">
      {/* Title Section */}
      <div className="text-center py-8">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600">
          Explore our newest arrivals at QuickBuy and stay ahead of the trends.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {latestProducts.map((item, idx) => (
          <ProductItem
            key={idx}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

      {/* View All Products Button */}
      <div className="flex justify-center items-center">
        <Link
          className="w-[200px] flex justify-center items-center mt-6 py-2 px-4 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition"
          to="/collection"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default LatestCollection;
