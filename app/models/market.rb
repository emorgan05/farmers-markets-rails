class Market < ApplicationRecord
  has_many :addresses
  has_many :market_vendors
  has_many :vendors, through: :market_vendors

  def address_attributes=(address_attributes)
    if self.errors.messages.empty?
      self.addresses.build(address_attributes)
    end
  end
end
