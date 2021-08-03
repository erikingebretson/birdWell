export const fetchAllProduct = () => {
    return $.ajax({
        method: "GET",
        url: '/api/products'
    })
}

export const fetchProduct = (productId) => {
    return $.ajax({
        method: "GET",
        url: `/api/products/${productId}`
    })
}