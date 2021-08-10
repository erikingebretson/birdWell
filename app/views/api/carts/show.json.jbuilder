json.id @cart.id
json.user_id @cart.user_id
json.products @cart.products.each do |product|
    json.set! product.id do
        json.id product.id
        json.product_name product.product_name
        json.cart_photo_url product.cart_photo_url
        json.colorway product.colorway
        json.size product.size
        json.price product.price
    # json.origin_prod product.origin_prod
    end
end