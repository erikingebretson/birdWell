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

export const createProduct = (product) => {
    return $.ajax({
        method: "POST",
        url: `/api/products`,
        data: { product }
    })
}

export const deleteProduct = (productId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/products/${productId}`
    })
}

// return $.ajax({
//     method: "POST",
//     url: `/api/products`,
//     data: { product:
//     {
//         product_name: "testname",
//         colorway: "test",
//         price: 1000,
//         cart_id: null,
//         gender: "men",
//         size: 10
//     } }
// })