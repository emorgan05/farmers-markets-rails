class Item < ApplicationRecord
  belongs_to :vendor
  belongs_to :category

  validates :price, numericality: { only_integer: true }
  validates :inventory, numericality: { only_integer: true }

  def self.by_category(category_id)
    where(category: category_id)
  end
end
