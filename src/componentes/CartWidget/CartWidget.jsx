import React, { useContext } from 'react'
import "./CartWidget.css"
import Carrito from "../../assets/img/carrito.png"
import { CarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {
  const {totalQuantity} = useContext(CarritoContext)

  return (
    <Link to='/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
      <img className='carrito' src={Carrito}/>
      {totalQuantity}
    </Link>
  )
}

export default CartWidget