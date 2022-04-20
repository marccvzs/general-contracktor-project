class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :num_rooms, :budget, :address, :completed, :img
  has_one :client
  # has_one :post
end
