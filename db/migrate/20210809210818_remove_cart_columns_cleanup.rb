class RemoveCartColumnsCleanup < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :cart_id
    remove_column :carts, :product_id
  end
end
