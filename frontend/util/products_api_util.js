export const indexProduct = () => {
    return $.ajax({
        method: "GET",
        url: '/api/products'
    })
}

export const showProduct = (productId) => {
    return $.ajax({
        method: "GET",
        url: `/api/products/${productId}`
    })
}