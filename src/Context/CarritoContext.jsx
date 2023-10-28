import React, { createContext, useState } from 'react';

export const CarritoContext = createContext({
  cart: [],
  total: 0, 
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0); 

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
      setTotal(prevTotal => prevTotal + (item.precio * quantity)); 
    } else {
      console.error('El producto ya fue agregado');
    }
  };

  const removeItem = (itemId) => {
    const itemToRemove = cart.find((prod) => prod.id === itemId);
    setCart(cart.filter((prod) => prod.id !== itemId));
    setTotal(prevTotal => prevTotal - (itemToRemove.precio * itemToRemove.quantity)); 
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0); 
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CarritoContext.Provider value={{ cart, total, addItem, removeItem, clearCart }}>
      {children}
    </CarritoContext.Provider>
  );
};
