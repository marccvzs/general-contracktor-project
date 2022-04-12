class CreateTaskImgs < ActiveRecord::Migration[7.0]
  def change
    create_table :task_imgs do |t|
      t.string :img
      t.belongs_to :project_task, null: false, foreign_key: true

      t.timestamps
    end
  end
end
