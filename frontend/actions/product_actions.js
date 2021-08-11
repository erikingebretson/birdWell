import * as ProductApiUtil from '../util/products_api_util'

export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT"
export const RECEIVE_ALL_PRODUCT = "RECEIVE_ALL_PRODUCT";

export const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

export const removeProduct = (productId) => ({
    type: REMOVE_PRODUCT,
    productId
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

export const createProduct = (product) => (dispatch) => (
    ProductApiUtil.createProduct(product)
    .then( res => dispatch(receiveProduct(res)) )
)

export const deleteProduct = (productId) => (dispatch) => (
    ProductApiUtil.deleteProduct(productId)
    .then(() => dispatch(removeProduct(productId)))
)