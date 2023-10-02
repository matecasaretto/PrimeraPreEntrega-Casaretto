import React, { useEffect, useState } from 'react'
import { getProducts } from '../../asyncMock';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';

const ItemDeatailContainer = () => {
    const [product, setProduct] = useState(null);

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [itemId])
  return (
    <div className='contenedor-item-detalle'>
      <ItemDetail {...product}/> 
    </div>
  )
}

export default ItemDeatailContainer
