class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :address
      t.integer :budget
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
