import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../Context/CarritoContext'


const ItemDetail = ({id, titulo, imgUrl, category, description, precio, stock}) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const {addItem} = useContext(CarritoContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, titulo, precio, imgUrl
    }

    addItem(item, quantity)

  }
  return (
    <div className='contenedor-principal'>
      <section className='item-container'>
       <div>
        <h2>
          {titulo}
        </h2>
       </div>
       <picture>
        <img className='imagen-item' src={imgUrl} />
       </picture>
       <div>
        <p>
            Descripcion del producto
        </p>
        <p>
            Precio: {precio}
        </p>
       </div>
       <div>
        <button>Detalles del producto</button>
       </div>
       <footer>
        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          {quantityAdded > 0 && (
        <Link to="/cart" className="Option">
          Finalizar Compra
        </Link>
     )}
      </footer>
      </section>
      
    </div>
  )
}

export default ItemDetail
