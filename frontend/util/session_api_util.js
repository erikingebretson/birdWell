export const signup = (user) => (
    $.ajax({
        method:"POST",
        url:'/api/user',
        data: { user }
    })
)

export const login = (user) => (
    $.ajax({
        method: "POST",
        url: '/api/session',
        data: { user }
    })
)

export const logout = () => (
    $.ajax({
        method: "DELETE",
        url: '/api/session'
    })
)

// $.ajax({
//     method: "POST",
//     url: '/api/user',
//     data: { user: {
//         username: 'test',
//         email: 'test1@test',
//         password: 'testing'
//     } }
// })