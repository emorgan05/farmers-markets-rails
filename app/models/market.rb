class Market < ApplicationRecord
  has_many :addresses
  has_many :market_vendors
  has_many :vendors, through: :market_vendors
  has_many :reviews

  def addresses_attributes=(addresses_attributes)
    addresses_attributes.each do |i, address_attributes|
      if self.errors.messages.empty?
        self.addresses.build(address_attributes)
      end
    end
  end
end
