class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      t.string :priority
      t.text :description
      t.belongs_to :project_task, null: false, foreign_key: true
      t.belongs_to :client, null: false, foreign_key: true
      t.belongs_to :contractor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
