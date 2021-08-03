# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  product_name :string           not null
#  size         :integer          not null
#  colorway     :string           not null
#  price        :integer          not null
#  cart_id      :integer
#  review_id    :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Product < ApplicationRecord
    validates :product_name, :size, :colorway, :price, presence: true

    has_many_attached :photos

end
