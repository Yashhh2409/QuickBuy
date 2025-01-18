import React, { useEffect, useState } from "react";
import axios from "axios";
import { currency, backendURL } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendURL + "/api/product/list", {
        headers: { token },
      });

      if (response.data) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendURL + "/api/product/remove", { id }, { headers: { token } });

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-4 text-xl font-semibold">All Products List</p>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-4 bg-gray-100 text-sm font-medium text-gray-700">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span className="text-center">Action</span>
        </div>

        {/* Product List */}
        {list.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[1fr_3fr_1fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-4 py-3 px-4 border-b text-sm"
          >
            <img className="w-16 h-16 object-cover rounded-md" src={item.image[0]} alt={item.name} />
            <p className="text-gray-800">{item.name}</p>
            <p className="text-gray-600">{item.category}</p>
            <p className="font-semibold">{currency}{item.price}</p>
            <p
              onClick={() => removeProduct(item._id)}
              className="cursor-pointer text-red-500 text-center font-bold hover:text-red-700"
            >
              X
            </p>
          </div>
        )).reverse()}
      </div>
    </>
  );
};

export default List;
