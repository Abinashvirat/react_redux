// Bod.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Bod() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product }); // Dispatch the action with the product as payload
    alert(`Added to cart: ${product.name} - $${product.price.toFixed(2)}`);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px',
        border: '1px solid black',  // Border color and style for the grid container
        borderRadius: '10px',       // Border radius for the grid container
        padding: '10px'             // Optional padding inside the grid container
      }}
    >
      {products.map((product, index) => (
        <div
          key={index}
          style={{
            backgroundColor: '#f0f0f0',
            padding: '20px',
            borderRadius: '5px',     // Border radius for each item
            textAlign: 'center',
            border: '1px solid black',// Border color and style for each item
          }}
        >
          <img src={product.image} alt={product.name} style={{ width: '300px', height: '200px' }} />
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
          <button
            style={{
              marginTop: '10px',
              padding: '10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            onClick={() => handleAddToCart(product)} // Handle add to cart click
          >
            <AddShoppingCartIcon style={{ marginRight: '5px' }} />
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Bod;



