import React from 'react'
import "./CartWidget.css"
import Carrito from "../../assets/img/carrito.png"


const CartWidget = (children) => {
  return (
    <>
    <button className='button-carrito'>
      <img className="carrito" src={Carrito} alt="" />
      <button className='button-producto'>1</button>
    </button>
    </>
  )
}

export default CartWidget