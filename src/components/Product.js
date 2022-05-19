import React from 'react';
import { Link } from 'react-router-dom';
import { shorten } from '../helpers/functions';

const Product = ({data}) => {
    const {title, price, image, id} = data;

    return (
        <div className='bg-white border border-gray-300 rounded-xl overflow-hidden transition-shadow hover:shadow-lg p-4'>
            <div className='aspect-square mb-4'>
                <img src={image} alt="product" className='w-full h-full' />
            </div>
            <div>
                <h3 className='text-lg font-medium py-2'>{shorten(title)}</h3>
                <span className='text-sm font-medium'>{price} $</span>
            </div>
            <div className='pt-4 flex items-center justify-between'>
                <Link className='text-blue-600 text-base' to={`/products/${id}`}>Details</Link>
                <button className='bg-blue-600 text-white px-3 py-1 rounded-md transition-colors hover:bg-blue-900'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;