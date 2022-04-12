class RoomImg < ApplicationRecord
  belongs_to :contractor
  belongs_to :client
  belongs_to :room
end
