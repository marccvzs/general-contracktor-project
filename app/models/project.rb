class Project < ApplicationRecord
  has_many :project_tasks
  belongs_to :contractor
  belongs_to :client
end
