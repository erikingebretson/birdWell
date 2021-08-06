@reviews.each do |review|
    json.set! review.id do
        json.id review.id
        json.title review.title
        json.body review.body
        json.stars review.stars
        json.username review.username
        json.product_id review.product_id
        json.user_id review.user_id
    end
end