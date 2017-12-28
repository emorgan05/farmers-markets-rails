class Market < ApplicationRecord
  has_many :addresses
  has_many :market_vendors
  has_many :vendors, through: :market_vendors
end
