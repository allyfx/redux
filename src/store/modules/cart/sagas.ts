import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { AxiosResponse } from 'axios';
import {
  addProductToCardFailure,
  addProductToCardRequest,
  addProductToCardSuccess
} from './action';

import { IState } from '../..';
import { ActionTypes } from './types';

type CheckProductStockRequest = ReturnType<typeof addProductToCardRequest>;

interface IStockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
  });

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`);

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCardSuccess(product));
  } else {
    yield put(addProductToCardFailure(product.id));
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)
]);