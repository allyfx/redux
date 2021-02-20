import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { IProduct } from '../store/modules/cart/types';
import api from '../services/api';
import { addProductToCard } from '../store/modules/cart/action';

const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    });
  }, []);

  const handleAddProductToCard = useCallback((product: IProduct) => {
    dispatch(addProductToCard(product));
  }, [dispatch]);

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <span>{product.price}</span> {"  "}

          <button
            type="button"
            onClick={() => handleAddProductToCard(product)}
          >
            Comprar
          </button>
        </article>
      ))}
    </main>
  );
};

export default Catalog;
