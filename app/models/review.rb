class Review < ApplicationRecord
  belongs_to :market
  belongs_to :vendor
end
