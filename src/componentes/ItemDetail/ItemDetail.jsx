import React from 'react'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
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
            Categoria: {category}
        </p>
        <p>
            Descripcion: {description}
        </p>
        <p>
            Precio: {price}
        </p>
       </div>
       <div>
        <button>Detalles del producto</button>
       </div>
      </section>
    </div>
  )
}

export default ItemDetail
