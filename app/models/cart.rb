# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Cart < ApplicationRecord
    validates :user_id, :product_id, presence: true

    has_many :products,
        foreign_key: :product_id,
        class_name: :Product

    has_one :user,
        foreign_key: :user_id,
        class_name: :User

end
