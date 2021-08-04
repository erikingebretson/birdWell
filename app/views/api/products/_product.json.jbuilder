# json.extract! product, :id, :product_name, :size, :colorway, :price, :photos.map { |url| url_for(url) }

# json.set! product.id do
        json.id product.id
        json.product_name product.product_name
        json.size product.size
        json.colorway product.colorway
        json.price product.price
        json.cart_id product.cart_id
        json.review_id product.review_id
        json.photo_urls product.photos.map { |url| url_for(url) }
# end