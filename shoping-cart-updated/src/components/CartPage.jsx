import React, { useContext, useMemo } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const {
    cart,
    loading,
    increment,
    decrement,
    removeFromCart,
    clearCart
  } = useContext(CartContext);

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <strong>{item.name}</strong> - ${item.price} × {item.quantity} = ${item.price * item.quantity}
                <div>
                  <button onClick={() => decrement(item.id)} disabled={loading || item.quantity <= 1}>−</button>
                  <button onClick={() => increment(item.id)} disabled={loading}>+</button>
                  <button onClick={() => removeFromCart(item.id)} disabled={loading}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button onClick={clearCart} disabled={loading}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
