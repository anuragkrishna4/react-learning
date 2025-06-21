import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = {
  items: [],
  loading: false
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) return state;
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    }
    case 'INCREMENT':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    case 'DECREMENT':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const increment = (id) => {
    dispatch({ type: 'INCREMENT', payload: id });
  };

  const decrement = (id) => {
    dispatch({ type: 'DECREMENT', payload: id });
  };

  return (
    <CartContext.Provider value={{
      cart: state.items,
      loading: state.loading,
      addToCart,
      removeFromCart,
      clearCart,
      increment,
      decrement
    }}>
      {children}
    </CartContext.Provider>
  );
};
