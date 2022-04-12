class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :budget, :num_rooms
  has_one :contractor
  has_one :client
end
