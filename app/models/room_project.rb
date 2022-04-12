class RoomProject < ApplicationRecord
  belongs_to :room
  belongs_to :project

  has_many :project_tasks
end
