class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :inventory
  belongs_to :vendor
  belongs_to :category
end
