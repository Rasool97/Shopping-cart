import React, { useContext } from 'react';
import Miuns from '../assets/icons/Miuns';
import Plus from '../assets/icons/Plus';
import Trash from '../assets/icons/Trash';
import { CartContext } from '../context/CartContextProvider';
import { shorten } from '../helpers/functions';

const Cart = ({data}) => {
    const {removeItem, increase, decrease} = useContext(CartContext);
    const {image, title, price, quantity, id} = data;

    const removeItemHandler = () => {
        removeItem(id)
    }

    const increaseHandler = () => {
        increase(id)
    }

    const decreaseHandler = () => {
        decrease(id)
    }

    return (
        <div className='flex w-full h-32 items-center justify-between gap-2 bg-white p-4 border border-gray-200 rounded-md'>
            <div className='w-20 h-20 p-2 flex items-center justify-center'>
                <img src={image} alt="cart" />
            </div>
            <div className='w-36 flex flex-col gap-y-1'>
                <h3 className='text-blue-600 text:sm md:text-lg font-medium'>{shorten(title)}</h3>
                <span className='text-green-600 text-xs md:text-base font-medium'>{price} $</span>
            </div>
            <span className='bg-yellow-500 text-white tex-base sm:text-lg font-medium px-3 rounded-md flex items-center justify-center'>
                {quantity}
            </span>
            <div className='flex items-center gap-2'>
                {/* Trash btn */}
                {quantity === 1 && (
                        <button onClick={removeItemHandler} className='bg-blue-600 text-white w-6 h-6 sm:w-8 sm:h-8 p-1 flex justify-center items-center rounded-md transition-colors hover:bg-blue-900'>
                            <Trash />
                        </button>
                    )}

                    {/* Decrease btn */}
                    {quantity > 1 && (
                    <button onClick={decreaseHandler} className='bg-blue-600 text-white w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center rounded-md transition-colors hover:bg-blue-900'>
                        <Miuns />
                    </button>)}

                    {/* Increase btn */}
                    {quantity > 0 && (
                    <button onClick={increaseHandler} className='bg-blue-600 text-white w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center rounded-md transition-colors hover:bg-blue-900'>
                        <Plus />
                    </button>)}
            </div>
        </div>
    );
};

export default Cart;