json.extract! user, :id, :email, :first_name, :last_name, :cart, :cart
# user.cart.products.each do |product|
#     json.set! product.id do
#         json.productId product.id
#         json.productName product.productName
#     end
# end