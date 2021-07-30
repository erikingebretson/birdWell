class CreateUser < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :cart_id
      t.integer :review_id
      t.timestamps
    end
    add_index :users, :session_token
    add_index :users, :cart_id
    add_index :users, :review_id
  end
end
