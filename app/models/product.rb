# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  product_name :string           not null
#  colorway     :string           not null
#  price        :integer          not null
#  cart_id      :integer
#  review_id    :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  gender       :string
#  detail1      :text
#  detail2      :text
#  size         :integer
#  display      :boolean
#
class Product < ApplicationRecord
    validates :product_name, :size, :colorway, :price, :detail1, :detail2, presence: true

    has_many_attached :photos

    has_many :reviews,
        foreign_key: :product_id,
        class_name: :Review

    belongs_to :cart,
        foreign_key: :product_id,
        class_name: :Cart
end
