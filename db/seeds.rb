# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all

user1 = User.create!(first_name: 'testfirstname', last_name: 'testlastname', email: 'test123', password: 'test123')

mTreeRunner = Product.create!(product_name: 'Tree Runner', size: 8, colorway: 'Jet Black', price: 95, cart_id: [], review_id: [])
wTreePiper = Product.create!(product_name: 'Tree Piper', size: 5, colorway: 'Luna', price: 95, cart_id: [], review_id: [])