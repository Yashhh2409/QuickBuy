import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className="text-gray-700 cursor-pointer flex flex-col items-center w-[200px] p-2"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden rounded-lg w-full h-[250px]">
        <img
          className="w-full h-full object-cover hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm text-center truncate">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
