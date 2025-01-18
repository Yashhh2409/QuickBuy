import React, { useContext, useEffect, useState } from 'react'
import Title from './Title';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    

    const [latestProducts, setLatestProducts] = useState([])
    
    useEffect(()=>{
        setLatestProducts(products.slice(0, 10))
    }, [products])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Explore our newest arrivals at QuickBuy and stay ahead of the trends.
            </p>
        </div>

        {/* Rendering PRoducts  */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 gap-y-6'>
                {
                    latestProducts.map((item, idx)=>(
                        <ProductItem key={idx} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
        </div>
            <div className='flex justify-center items-center'>
            <Link className='w-[200px] flex justify-center items-center mt-5 py-2 px-2 bg-black text-white rounded-lg' to='/collection'>View All Products</Link>
            </div>

    </div>
  )
}

export default LatestCollection
