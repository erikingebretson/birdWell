@reviews.each do |review|
    json.set! review.id do
        json.id review.id
        json.title review.title
        json.body review.body
        json.stars review.stars
        json.username review.username
        json.productId review.product_id
        json.userId review.user_id
        json.created_at review.created_at
        json.userFirstName @review.user.first_name
    end
end