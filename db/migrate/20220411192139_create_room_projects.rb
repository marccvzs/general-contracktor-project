class CreateRoomProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :room_projects do |t|
      t.string :name
      t.string :description
      t.belongs_to :room, null: false, foreign_key: true
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
