class ChangeProduct < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :gender, :string
    add_column :products, :detail1, :text
    add_column :products, :detail2, :text
    change_column :products, :size, :integer
  end
end
