import * as ProductApiUtil from '../util/products_api_util'

export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_ALL_PRODUCT = "RECEIVE_ALL_PRODUCT";

export const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

export const receiveAllProduct = (products) => ({
    type: RECEIVE_ALL_PRODUCT,
    products
})

export const fetchProduct  = (productId) => (dispatch) => (
    ProductApiUtil.fetchProduct(productId)
    .then( res => dispatch(receiveProduct(res)))
)

export const fetchAllProduct = () => (dispatch) => (
    ProductApiUtil.fetchAllProduct()
    .then(res => dispatch(receiveAllProduct(res)))
)