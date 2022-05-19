import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {ProductsContext } from '../context/ProductsContextProvider';

const ProductDetails = () => {
    const {getProduct, productDetail} = useContext(ProductsContext);
    const params = useParams();
    const id = params.id;
    
    useEffect(() => {
        getProduct(id);
    }, [])

    
    return (
        <section className='py-6 md:py-10 px-4 md:px-16 w-full min-h-screen bg-gray-100'>
            {productDetail && (
                <div className="container h-auto bg-white border rounded-md grid grid-cols-1 md:grid-cols-9 py-6 px-4 gap-8">
                    <div className='aspect-[1/1.1] p-2 col-span-full md:col-span-3'>
                        <img src={productDetail.image} className="h-full w-full" alt="productImage" />
                    </div>
                    <div className='flex flex-col gap-y-4 p-8 border-2 border-gray-200 rounded-md col-span-full md:col-span-6'>
                        <h2 className='text-lg md:text-2xl font-medium text-blue-600'>{productDetail.title}</h2>
                        <p className='text-sm md:text-base text-gray-800 text-justify'>{productDetail.description}</p>
                        <p>
                            <span className='text-base md:text-lg font-bold text-yellow-400'>Category: </span>
                            <span className='text-sm md:text-base bg-purple-500 text-white rounded-md px-1'>{productDetail.category}</span>
                        </p>
                        <div className='flex justify-between items-center mt-4'>
                            <span className='bg-green-600 text-white text-xs sm:text-sm md:text-base py-2 px-3 rounded-md'>{productDetail.price} $</span>
                            <Link className='bg-blue-600 text-white font-medium text-xs sm:text-sm md:text-base py-2 px-3 rounded-md transition-colors hover:bg-blue-900'  to='/products'>Back to Shop</Link>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProductDetails;