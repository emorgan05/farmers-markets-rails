class AddressSerializer < ActiveModel::Serializer
  attributes :id, :street_address_1, :street_address_2, :city, :state, :zip
  belongs_to :market
end
