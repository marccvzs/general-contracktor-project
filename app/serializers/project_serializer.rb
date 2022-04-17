class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :num_rooms, :budget, :address
  has_one :client
end
