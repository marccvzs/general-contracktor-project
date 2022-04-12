class CreateProjectTaskMaterials < ActiveRecord::Migration[7.0]
  def change
    create_table :project_task_materials do |t|
      t.integer :qty
      t.belongs_to :material, null: false, foreign_key: true
      t.belongs_to :project_task, null: false, foreign_key: true

      t.timestamps
    end
  end
end
