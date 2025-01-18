import React, { useState } from "react";
import axios from 'axios'
import { backendURL } from "../App";
import { toast } from "react-toastify";

const Login = ({setToken}) => {
  const [inputData, setInputData] = useState({
    email: "",
    password: ""
  });

  const inputHandler = (e) => {
    let {name, value} = e.target;
    setInputData({...inputData, [name]:value})
  }

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendURL+'/api/user/admin', inputData)

      if(response.data.success) {
        setToken(response.data.token)
      } else {
        toast.error(response.data.message)
      } 
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={submitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Email Address
            </p>
            <input
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={inputHandler}
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={inputHandler}
              required
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
