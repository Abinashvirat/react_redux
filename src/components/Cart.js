import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';

function Cart() {
  // Access cart items from the Redux store
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Function to handle removing an item from the cart
  const handleRemove = (index) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: index });
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      <Grid container spacing={3}>
        {cartItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ₹{item.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => handleRemove(index)}>
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Cart;
