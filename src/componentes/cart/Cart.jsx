import React from 'react';
import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import CartItem from '../cartitem/CartItem.jsx';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total, removeItem } = useContext(
    CarritoContext
  );

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to='/' className='Option'>
          Productos
        </Link>
      </div>
    );
  }

  console.log('Total actual:', total);

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} removeItem={removeItem} />
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className='Button'>
        Limpiar Carrito
      </button>
      <Link to='/checkout' className='Option'>
        Checkout
      </Link>
    </div>
  );  
};

export default Cart;
