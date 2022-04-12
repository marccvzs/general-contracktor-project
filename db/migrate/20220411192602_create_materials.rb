class CreateMaterials < ActiveRecord::Migration[7.0]
  def change
    create_table :materials do |t|
      t.float :price
      t.string :material

      t.timestamps
    end
  end
end
