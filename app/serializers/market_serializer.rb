class MarketSerializer < ActiveModel::Serializer
  attributes :id, :name, :operating_hours
  has_many :addresses
end
