class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :budget, :email
end
