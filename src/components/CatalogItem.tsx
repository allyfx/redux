import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCard } from '../store/modules/cart/action';
import { IProduct } from '../store/modules/cart/types';

interface ICatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCard = useCallback(() => {
    dispatch(addProductToCard(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"  "}

      <button
        type="button"
        onClick={handleAddProductToCard}
      >
        Comprar
      </button>
    </article>
  );
};

export default CatalogItem;