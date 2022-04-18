class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :budget, :email
  has_many :projects
  # has_many :posts
end
