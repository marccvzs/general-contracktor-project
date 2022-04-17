class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.belongs_to :client, null: false, foreign_key: true
      t.integer :num_rooms
      t.integer :budget
      t.string :address

      t.timestamps
    end
  end
end
