class AddProductPhotoCol < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :cart_photo_url, :string
  end
end
