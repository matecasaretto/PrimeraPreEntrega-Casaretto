import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({id, titulo, imgUrl, precio, stock}) => {
  return (
    <div className='contenedor-principal'>
      <section className='item-container'>
       <div>
        <h2>
          {titulo}
        </h2>
       </div>
       <picture>
        <img className='imagen-item' src={imgUrl} alt={titulo}/>
       </picture>
       <div>
        <p>
          precio: {precio}
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
