class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.integer :budget
      t.integer :num_rooms
      t.belongs_to :contractor, null: false, foreign_key: true
      t.belongs_to :client, null: false, foreign_key: true

      t.timestamps
    end
  end
end
