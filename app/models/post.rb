class Post < ApplicationRecord
  belongs_to :client
  belongs_to :project
end
