# == Schema Information
#
# Table name: products
#
#  id             :bigint           not null, primary key
#  product_name   :string           not null
#  colorway       :string           not null
#  price          :integer          not null
#  cart_id        :integer
#  review_id      :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  gender         :string
#  detail1        :text
#  detail2        :text
#  size           :integer
#  display        :boolean
#  cart_photo_url :text
#
require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
