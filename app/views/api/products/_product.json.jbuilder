json.id product.id
json.product_name product.product_name
json.size product.size
json.colorway product.colorway
json.price product.price
json.cart_id product.cart_id
json.review_id product.review_id
json.gender product.gender
json.detail1 product.detail1
json.detail2 product.detail2
json.reviews product.reviews.each do |review|
        
            json.id review.id
            json.body review.body
            json.createdAt review.created_at
            json.productId review.product_id
            json.stars review.stars
            json.title review.title
            json.userId review.user_id
            json.username review.username
            json.userFirstName review.user.first_name

        end
json.photo_urls product.photos.map { |url| url_for(url) }