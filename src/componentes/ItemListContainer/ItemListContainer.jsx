import React, { useEffect } from 'react';
import './ItemListContainer.css'
import { useState } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function MyComponent({greeting}) {
  const [products, setProducts] = useState([])

  const {categoryId} = useParams()
  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

      asyncFunc(categoryId)
        .then(response => {
          setProducts(response)
        })
        .catch(error => {
          console.log(error)
        })
  }, [categoryId])
  return (
    <div className='container-itemlistcontainer'>
      <h1>{greeting}</h1>
      <ItemList products={products}/>
    </div>
  );
}

export default MyComponent;