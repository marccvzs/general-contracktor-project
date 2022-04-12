class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :budget, :email, :password_digest
end
