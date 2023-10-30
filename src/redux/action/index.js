export const GET_PRODUCT_ID = 'GET_PRODUCT_ID';

export const addProduct = (id) => ({
  type: GET_PRODUCT_ID,
  payload: id,
});

export const Filter_PRODUCT = 'Filter_PRODUCT';

export const filterProduct = (products) => ({
  type: Filter_PRODUCT,
  payload: products,
});