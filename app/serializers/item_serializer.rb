class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :inventory
  belongs_to :vendor, serializer: ItemVendorSerializer
  belongs_to :category
end
