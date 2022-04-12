class ProjectTaskMaterial < ApplicationRecord
  belongs_to :material
  belongs_to :project_task
end
