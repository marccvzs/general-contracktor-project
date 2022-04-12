class Note < ApplicationRecord
  belongs_to :project_task
  belongs_to :client
  belongs_to :contractor
end
