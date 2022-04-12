class NoteSerializer < ActiveModel::Serializer
  attributes :id, :priority, :description
  has_one :project_task
  has_one :client
  has_one :contractor
end
