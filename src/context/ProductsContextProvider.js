import {createContext, useEffect, useReducer, useState} from 'react';
import { getProductDetail, getProducts } from '../services/api';

export const ProductsContext = createContext({products: []})

const initialState = {
    products: [],
    productDetail: null,
}

const productsReducer = (state, action) => {
    switch(action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products : action.payload
            }
        case 'GET_PRODUCT':
            return {
                ...state,
                productDetail: action.payload
            }
        case 'PENDING': 
            return {
                ...state,
                productDetail: null,
            }
        default:
            return state    
    }
}

const ProductsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(productsReducer, initialState)

    useEffect(() => {
        const fetchAPI = async () => {
            dispatch({type: 'GET_PRODUCTS', payload: await getProducts()})
        }

        fetchAPI();
    }, [])

    const getProduct = async (productId) => {
        dispatch({type: 'PENDING'});
        dispatch({type: 'GET_PRODUCT', payload: await getProductDetail(productId)})
    }

    return (
        <ProductsContext.Provider value={{
            products: state.products,
            productDetail: state.productDetail,
            getProduct,
            }}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;