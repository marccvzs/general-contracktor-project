class PostSerializer < ActiveModel::Serializer
  attributes :id
  has_one :client
  has_one :project
end
