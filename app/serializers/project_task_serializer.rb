class ProjectTaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :completed, :hours, :description
  has_one :room
  has_one :project
end
