export const createCart = (userId) => { 
    return $.ajax({
        method: "POST",
        url: '/api/carts',
        data: { cart: {
            user_id: userId
        } }
    })
}

export const updateCart = (cart) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/carts/${cart.id}`,
        data: { cart }
    })
}

export const fetchCart = (cartId) => {
    return $.ajax({
        method: "GET",
        url: `/api/carts/${cartId}`
    })
}

export const deleteCart = (cartId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/carts/${cartId}`
    })
}

// export const updateCart = (cart) => {
//     return $.ajax({
//         method: "PATCH",
//         url: `/api/carts/${cart.id}`,
//         data: { cart: {
//             product_id: 38
//         } }
//     })
// }