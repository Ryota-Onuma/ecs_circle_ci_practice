class TweetSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
end
