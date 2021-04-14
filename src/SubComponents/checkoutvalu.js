import React, { useState, useEffect } from 'react';
import Checkout from '../Components/CheckoutForm/Checkout/Checkout';
import { commerce } from '../lib/commerce';
const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
      <div style={{ display: 'flex' }}>
       <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
      </div>
    
  );
};

export default App;
