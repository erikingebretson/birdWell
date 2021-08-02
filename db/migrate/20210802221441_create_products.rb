class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_name, null: false
      t.integer :size, null: false
      t.string :colorway, null: false
      t.integer :price, null: false
      t.integer :cart_id
      t.integer :review_id
      t.timestamps
    end
    add_index :products, :cart_id
    add_index :products, :review_id
  end
end
