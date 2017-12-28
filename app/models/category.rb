class Category < ApplicationRecord
  has_many :items
  has_many :vendors, through: :items
end
