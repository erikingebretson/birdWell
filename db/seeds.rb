# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Product.destroy_all

user1 = User.create!(first_name: 'testfirstname', last_name: 'testlastname', email: 'test123', password: 'test123')

mTreeRunner = Product.create!(product_name: 'Tree Runner', size: 8, colorway: 'Jet Black', price: 95, cart_id: [], review_id: [])
file1 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/mtree_runner/1-tree-runner-blk.jpeg')
file2 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/mtree_runner/2-tree-runner-blk.jpeg')
file3 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/mtree_runner/3-tree-runner-blk.jpeg')
file4 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/mtree_runner/4-tree-runner-blk.jpeg')
file5 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/mtree_runner/5-tree-runner-blk.jpeg')
file6 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/mtree_runner/6-tree-runner-blk.jpeg')
file7 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/mtree_runner/00-tree-runner-nvy.jpeg')
mTreeRunner.photos.attach(io: file1, filename: '1-tree-runner-blk.jpeg')
mTreeRunner.photos.attach(io: file2, filename: '2-tree-runner-blk.jpeg')
mTreeRunner.photos.attach(io: file3, filename: '3-tree-runner-blk.jpeg')
mTreeRunner.photos.attach(io: file4, filename: '4-tree-runner-blk.jpeg')
mTreeRunner.photos.attach(io: file5, filename: '5-tree-runner-blk.jpeg')
mTreeRunner.photos.attach(io: file6, filename: '6-tree-runner-blk.jpeg')
mTreeRunner.photos.attach(io: file7, filename: '6-tree-runner-blk.jpeg')

mTreeDasher = Product.create!(product_name: 'Tree Dasher', size: 8, colorway: 'Quartz', price: 125, cart_id: [], review_id: [])
file1 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/mtree_dasher/1-mtree-dasher-qrt.jpeg')
file2 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/mtree_dasher/2-mtree-dasher.jpeg')
file3 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/mtree_dasher/3-mtree-dasher-qrt.jpeg')
file4 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/mtree_dasher/4-mtree-dasher-qrt.jpeg')
file5 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/mtree_dasher/5-mtree-dasher-qrt.jpeg')
file6 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/mtree_dasher/6-mtree-dasher-qrt.jpeg')
file7 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/mtree_dasher/00-mtree-dasher-qrt.jpeg')
mTreeDasher.photos.attach(io: file1, filename: '1-mtree-dasher-qrt.jpeg')
mTreeDasher.photos.attach(io: file2, filename: '2-mtree-dasher.jpeg')
mTreeDasher.photos.attach(io: file3, filename: '3-mtree-dasher-qrt.jpeg')
mTreeDasher.photos.attach(io: file4, filename: '4-mtree-dasher-qrt.jpeg')
mTreeDasher.photos.attach(io: file5, filename: '5-mtree-dasher-qrt.jpeg')
mTreeDasher.photos.attach(io: file6, filename: '6-mtree-dasher-qrt.jpeg')
mTreeDasher.photos.attach(io: file7, filename: '00-mtree-dasher-qrt.jpeg')

wTreePiper = Product.create!(product_name: 'Tree Piper', size: 5, colorway: 'Luna', price: 95, cart_id: [], review_id: [])
file1 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/wtree_piper/1-tree-piper-lna.jpeg')
file2 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/wtree_piper/2-tree-piper-lna.jpeg')
file3 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/wtree_piper/3-tree-piper-lna.jpeg')
file4 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/wtree_piper/4-tree-piper-lna.jpeg')
file5 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/wtree_piper/5-tree-piper-lna.jpeg')
file6 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/wtree_piper/6-tree-piper-lna.jpeg')
file7 = URI.open('https://birdwell-dev.s3.us-west-1.amazonaws.com/wtree_piper/00-tree-piper-lna.jpeg')
wTreePiper.photos.attach(io: file1, filename: '1-tree-piper-lna.jpeg')
wTreePiper.photos.attach(io: file2, filename: '2-tree-piper-lna.jpeg')
wTreePiper.photos.attach(io: file3, filename: '3-tree-piper-lna.jpeg')
wTreePiper.photos.attach(io: file4, filename: '4-tree-piper-lna.jpeg')
wTreePiper.photos.attach(io: file5, filename: '5-tree-piper-lna.jpeg')
wTreePiper.photos.attach(io: file6, filename: '6-tree-piper-lna.jpeg')
wTreePiper.photos.attach(io: file7, filename: '00-tree-piper-lna.jpeg')