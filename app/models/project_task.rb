class ProjectTask < ApplicationRecord
  belongs_to :room
  belongs_to :project

  has_many :task_imgs
  has_many :project_task_materials
  has_many :notes
end
