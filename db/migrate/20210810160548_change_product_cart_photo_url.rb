class ChangeProductCartPhotoUrl < ActiveRecord::Migration[5.2]
  def change
    change_column :products, :cart_photo_url, :text
  end
end
