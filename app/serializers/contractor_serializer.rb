class ContractorSerializer < ActiveModel::Serializer
  attributes :id, :name, :company, :trade, :email, :password_digest
end
