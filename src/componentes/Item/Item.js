import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {
  return (
    <div className='contenedor-principal'>
      <section className='item-container'>
       <div>
        <h2>
          {name}
        </h2>
       </div>
       <picture>
        <img className='imagen-item' src={img} alt={name}/>
       </picture>
       <div>
        <p>
          precio: {price}
        </p>
        <p>
          Stock disponible: {stock}
        </p>
       </div>
       <div>
        <Link to={`/item/${id}`}>Detalles del producto</Link>
       </div>
      </section>
    </div>
  )
}

export default Item
