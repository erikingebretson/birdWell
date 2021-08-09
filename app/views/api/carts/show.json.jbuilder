json.id @cart.id
json.user_id @cart.user_id
json.products @cart.products.each do |product|
    json.id product.id
    json.product_name product.product_name
end