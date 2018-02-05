class VendorSerializer < ActiveModel::Serializer
  attributes :id, :shop_name, :description, :contact
end
