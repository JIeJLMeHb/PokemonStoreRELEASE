import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const ShoppingCart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useContext(CartContext);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    const confirmCheckout = window.confirm(
      '🎉 Congratulations on your purchase! 🎉\n\n' +
      `You're buying ${cartItems.reduce((sum, item) => sum + item.quantity, 0)} Pokémon for $${totalPrice.toFixed(2)}\n\n` +
      'Are you ready to proceed payment? 😏'
    );
    
    if (confirmCheckout) {
      setIsCheckingOut(true);
      
      setTimeout(() => {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
        
        setTimeout(() => {
          clearCart();
          setIsCheckingOut(false);
          
          alert('🎊 Purchase complete! Thank you for shopping at Pokémon Store! 🎊');
        }, 500);
      }, 1500);
    }
  };

  return (
    <div className="cart-container">
      <h3>Shopping Cart ({cartItems.length} items)</h3>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>${item.price} each</p>
                <div className="quantity-controls">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          ))}
          
          <div className="cart-total">
            <h4>Total: ${totalPrice.toFixed(2)}</h4>
            <button 
              onClick={handleCheckout}
              className="checkout-btn"
              disabled={cartItems.length === 0 || isCheckingOut}
            >
              {isCheckingOut ? (
                <>
                  <span className="checkout-spinner">⏳</span> Processing...
                </>
              ) : (
                'Checkout'
              )}
            </button>
            {cartItems.length > 0 && !isCheckingOut && (
              <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>
                Real CHECKOUT BUTTON!!!
              </p>
            )}
            {isCheckingOut && (
              <p style={{ fontSize: '0.8rem', color: '#667eea', marginTop: '5px', fontWeight: 'bold' }}>
                Preparing your PokeBalls...
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;