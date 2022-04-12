class ContractorSerializer < ActiveModel::Serializer
  attributes :id, :name, :company, :trade, :email
end
