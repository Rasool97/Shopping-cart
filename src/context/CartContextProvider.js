import { createContext, useReducer } from "react";
import {sumItems} from '../helpers/functions';

export const CartContext = createContext({});

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
}

const cartReducer = (state, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            return {
                selectedItems: action.payload.selectedItems,
                itemsCounter: action.payload.itemsCounter,
                total: action.payload.total,
                checkout: false,
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                selectedItems: action.payload.selectedItems,
                itemsCounter: action.payload.itemsCounter,
                total: action.payload.total,
            }
        case "INCERASE":
            return {
                ...state,
                selectedItems: action.payload.selectedItems,
                itemsCounter: action.payload.itemsCounter,
                total: action.payload.total,
            }
        case "DECREASE":
            return {
                ...state,
                selectedItems: action.payload.selectedItems,
                itemsCounter: action.payload.itemsCounter,
                total: action.payload.total,
            }
        case 'CHECKOUT': 
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true,
            }
        case 'CLEAR': 
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false,
            }
        default:
            return state
    }
}

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addItem = item => {
        const selectedItems = [...state.selectedItems];

        if(!state.selectedItems.find(product => product.id === item.id)) {
            selectedItems.push({
                ...item,
                quantity: 1
            });
    
            dispatch({type: 'ADD_ITEM', payload: {
                selectedItems,
                ...sumItems(selectedItems)
            }})
        }    
    }

    const removeItem = id => {
        let selectedItems = [...state.selectedItems];
        selectedItems = selectedItems.filter(product => product.id !== id);

        dispatch({type: 'REMOVE_ITEM', payload: {
            selectedItems,
            ...sumItems(selectedItems)
        }})
    }

    const increase = id => {
        const selectedItems = [...state.selectedItems];
        const itemIndex = selectedItems.findIndex(product => product.id === id);
        selectedItems[itemIndex].quantity++;
        
        
        dispatch({type: 'INCERASE', payload: {
            selectedItems,
            ...sumItems(selectedItems)
        }})
    }

    const decrease = id => {
        const selectedItems = [...state.selectedItems];
        const itemIndex = selectedItems.findIndex(product => product.id === id);
        selectedItems[itemIndex].quantity--;
        
        dispatch({type: 'DECREASE', payload: {
            selectedItems,
            ...sumItems(selectedItems)
        }})
    }

    const checkoutHandler = () => {
        dispatch({type: 'CHECKOUT'})
    }

    const clearHandler = () => {
        dispatch({type: 'CLEAR'})
    }

    return(
        <CartContext.Provider value={{
            items: state.selectedItems,
            itemsCounter: state.itemsCounter,
            total: state.total,
            checkout: state.checkout,
            addItem,
            removeItem,
            increase,
            decrease,
            checkoutHandler,
            clearHandler,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;