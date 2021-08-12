# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#
class Cart < ApplicationRecord

    # has_many :products,
    #     foreign_key: :cart_id,
    #     class_name: :Product,
    #     dependent: :destroy

    # belongs_to :user
        # foreign_key: :user_id,
        # class_name: :User

end
