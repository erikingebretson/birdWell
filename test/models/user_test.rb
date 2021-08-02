# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  cart_id         :integer
#  review_id       :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string           not null
#  last_name       :string           not null
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
