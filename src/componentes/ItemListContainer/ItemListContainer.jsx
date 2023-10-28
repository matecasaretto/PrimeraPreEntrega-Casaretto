import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../service/firebase/firebaseConfig';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams(); // Utiliza 'categoryId' en todas las partes

  useEffect(() => {
    setLoading(true);

    const fetchProducts = async () => {
      try {
        let collectionRef;

        if (categoryId) {
          // Si 'categoryId' está definido en la URL, filtra por categoría
          collectionRef = query(collection(db, 'Item'), where('categoria', '==', categoryId));
        } else {
          // Si 'categoryId' no está definido, obtén todos los productos
          collectionRef = collection(db, 'Item');
        }

        const response = await getDocs(collectionRef);
        const productsAdapted = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsAdapted);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className='container-itemlistcontainer'>
      <h1>{greeting}</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;

