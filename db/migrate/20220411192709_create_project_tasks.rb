class CreateProjectTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :project_tasks do |t|
      t.string :name
      t.boolean :completed
      t.integer :hours
      t.text :description
      t.belongs_to :room, null: false, foreign_key: true
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
