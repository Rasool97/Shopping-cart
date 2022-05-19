import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { quantityCount, shorten } from '../helpers/functions';
import Trash from '../assets/icons/Trash';
import Miuns from '../assets/icons/Miuns';
import Plus from '../assets/icons/Plus';

// Context
import { CartContext } from '../context/CartContextProvider';

const Product = ({data}) => {
    const {title, price, image, id} = data;
    const {items, addItem, removeItem, increase, decrease} = useContext(CartContext);

    const addItemHandler = () => {
        addItem(data);
    }

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

                <div className='flex justify-between gap-x-2 items-center'>
                    {/* Add to cart btn */}
                    {quantityCount(items, id) < 1 && (
                    <button onClick={addItemHandler} className='bg-blue-600 text-white px-3 py-1 rounded-md transition-colors hover:bg-blue-900'>
                        Add to Cart
                    </button>)}
                    
                    {/* Trash btn */}
                    {quantityCount(items, id) === 1 && (
                        <button onClick={removeItemHandler} className='bg-blue-600 text-white w-8 h-8 p-1 flex justify-center items-center rounded-md transition-colors hover:bg-blue-900'>
                            <Trash />
                        </button>
                    )}

                    {/* Decrease btn */}
                    {quantityCount(items, id) > 1 && (
                    <button onClick={decreaseHandler} className='bg-blue-600 text-white w-8 h-8 flex justify-center items-center rounded-md transition-colors hover:bg-blue-900'>
                        <Miuns />
                    </button>)}

                    {/* Count product */}
                    {quantityCount(items, id) > 0 && (
                        <span className='text-lg font-bold text-blue-600'>
                            {quantityCount(items, id)}
                        </span>
                    )}

                    {/* Increase btn */}
                    {quantityCount(items, id) > 0 && (
                    <button onClick={increaseHandler} className='bg-blue-600 text-white w-8 h-8 flex justify-center items-center rounded-md transition-colors hover:bg-blue-900'>
                        <Plus />
                    </button>)}
                </div>
            </div>
        </div>
    );
};

export default Product;