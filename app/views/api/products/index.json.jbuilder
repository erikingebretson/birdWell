@products.each do |product|
    json.set! product.id do
        json.id product.id
        json.product_name product.product_name
        json.size product.size
        json.colorway product.colorway
        json.price product.price
        json.cart_id product.cart_id
        json.review_id product.review_id
    end
end
# json.partial! "api/products/product", product: @product