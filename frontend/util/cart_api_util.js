export const createCart = (userId, ) => {
    return $.ajax({
        method: "POST",
        url: '/api/carts',
        data: { userId }
    })
}

export const updateCart = (userId , productId) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/carts/${userId}`,
        data: { productId }
    })
}

export const 