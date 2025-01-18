import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className="text-gray-700 cursor-pointer p-4 border rounded-lg hover:shadow-lg transition-all flex flex-col items-center"
      to={`/product/${id}`}
    >
      {/* Image Container */}
      <div className="overflow-hidden rounded-lg h-48 w-48 flex items-center justify-center bg-gray-100">
        <img
          className="h-full object-contain transition-transform duration-200 hover:scale-110"
          src={image[0]}
          alt={name}
        />
      </div>

      {/* Product Name */}
      <p className="pt-3 pb-1 text-sm font-medium text-center truncate">{name}</p>

      {/* Product Price */}
      <p className="text-sm font-semibold text-center">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
