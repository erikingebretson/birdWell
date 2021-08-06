export const fetchAllReviews = () => {
    return $.ajax({
        method:"GET",
        url: '/api/reviews'
    })
}

export const fetchReview = () => {
    return $.ajax({
        method: "GET",
        url: '/api/reviews'
    })
}

export const createReview = (review) => {
    return $.ajax({
        method: "POST",
        url: '/api/reviews',
        data: { review }
    })
}

// return $.ajax({
//     method: "POST",
//     url: '/api/reviews',
//     data: {review: {
//         title: 'Great Shoe!',
//         body: 'Super comfy, cant believe how well these fit and how good they look. Wow!',
//         stars: 5,
//         username: 'DemoUser@demo.com',
//         user_id: 51,
//         product_id: 34
//     }}
// })