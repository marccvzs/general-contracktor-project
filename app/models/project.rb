class Project < ApplicationRecord
  belongs_to :contractor
  belongs_to :client
end
