import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';
import { addProductToCardRequest } from '../store/modules/cart/action';
import { IProduct } from '../store/modules/cart/types';

interface ICatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  })

  const handleAddProductToCard = useCallback(() => {
    dispatch(addProductToCardRequest(product));
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
      </button> {"  "}

      { hasFailedStockCheck && <span style={{ color: 'red' }}>Falta de stock</span> }
    </article>
  );
};

export default CatalogItem;