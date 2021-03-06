import {useContext} from 'react';
import Product from '../components/Product';
import { ProductsContext } from '../context/ProductsContextProvider';

const Products = () => {
    const {products} = useContext(ProductsContext);

    return (
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-12 py-6 md:py-10 px-4 md:px-16'>
            {products.map(product => (
                <Product key={product.id} data={product} />
            ))}
        </div>
    );
};

export default Products;