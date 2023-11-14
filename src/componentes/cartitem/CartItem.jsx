import React from 'react';
import '../cartitem/CartItem.css'


const CartItem = ({ id, titulo, precio, quantity, removeItem }) => {
  return (
    <div className='CartItem'>
      <div className='CartItemDetails'>
        <h3>{titulo}</h3>
        <p>Precio ${precio}</p>
        <p>Cantidad: {quantity}</p>
      </div>
      <button onClick={() => removeItem(id)} className='RemoveButton'>Quitar</button>
    </div>
  );
};

export default CartItem;