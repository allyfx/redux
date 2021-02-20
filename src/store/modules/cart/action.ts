import { IProduct } from "./types";

export function addProductToCard(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CARD',
    payload: {
      product,
    }
  };
}
