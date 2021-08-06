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
json.photo_urls product.photos.map { |url| url_for(url) }