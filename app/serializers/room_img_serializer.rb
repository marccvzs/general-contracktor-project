class RoomImgSerializer < ActiveModel::Serializer
  attributes :id, :img
  has_one :contractor
  has_one :client
  has_one :room
end
