class Contractor < ApplicationRecord
    has_secure_password
    has_many :projects
    has_many :room_imgs
    has_many :clients, through: :projects

    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
end
