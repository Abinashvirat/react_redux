import { createStore } from 'redux';

const initialState = {
  products: [
    { name: 'Product A1', price: 56475555, image: 'https://via.placeholder.com/150' },
    { name: 'Product B2', price: 56438484, image: 'https://via.placeholder.com/150' },
    { name: 'Product C3', price: 57384877, image: 'https://via.placeholder.com/150' },
    { name: 'Product D4', price: 39574357, image: 'https://via.placeholder.com/150' },
    { name: 'Product E5', price: 59573474, image: 'https://via.placeholder.com/150' },
    { name: 'Product F6', price: 24573868, image: 'https://via.placeholder.com/150' },
    { name: 'Product G7', price: 44457476, image: 'https://via.placeholder.com/150' },
    { name: 'Product H8', price: 34585785, image: 'https://via.placeholder.com/150' },
  ],
  cart: [],  // Cart state
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':  // Add to cart
      return {
        ...state,
        cart: [...state.cart, action.payload], // Add the selected product to the cart
      };
      
    case 'REMOVE_FROM_CART':  // Remove from cart
      return {
        ...state,
        cart: state.cart.filter((item, index) => index !== action.payload), // Remove item based on index
      };
      
    default:
      return state;
  }
};

export const store = createStore(reducer);


