import { all, takeLatest } from 'redux-saga/effects';

function checkProductStock() {
  console.log('Successfully added to cart');
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CARD', checkProductStock)
]);