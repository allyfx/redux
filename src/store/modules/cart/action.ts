import { IProduct } from "./types";

export function addProductToCardRequest(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CARD_REQUEST',
    payload: {
      product,
    }
  };
}

export function addProductToCardSuccess(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CARD_SUCCESS',
    payload: {
      product,
    }
  };
}

export function addProductToCardFailure(productId: number) {
  return {
    type: 'ADD_PRODUCT_TO_CARD_FAILURE',
    payload: {
      productId,
    }
  };
}
