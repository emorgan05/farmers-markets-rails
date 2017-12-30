class Address < ApplicationRecord
  belongs_to :market

  def self.by_state(state)
    where(state: state)
  end
end
