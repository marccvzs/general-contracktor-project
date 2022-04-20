class AddImgToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :img, :string
  end
end
