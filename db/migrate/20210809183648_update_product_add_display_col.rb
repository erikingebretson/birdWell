class UpdateProductAddDisplayCol < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :size, :integer
    add_column :products, :display, :boolean

  end
end
