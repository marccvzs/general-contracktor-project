class RoomProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_one :room
  has_one :project
end
