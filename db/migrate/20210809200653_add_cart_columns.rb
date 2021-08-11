class AddCartColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :carts, :user_id, :integer
    add_column :carts, :product_id, :integer
  end
end
