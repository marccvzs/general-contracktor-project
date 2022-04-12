class Room < ApplicationRecord
    has_many :room_imgs
    has_many :room_projects
end
