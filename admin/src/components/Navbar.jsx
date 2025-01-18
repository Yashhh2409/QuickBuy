import React from 'react'
import {assets} from "../assets/admin_assets/assets"

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <div className='flex items-center gap-3'>
      <img className='w-12' src={assets.logo} alt="" />
      <p className='text-3xl font-semibold'>QuickBuy</p>
      </div>
      <p className='text-3xl font-semibold'>Admin Panel</p>
      <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
