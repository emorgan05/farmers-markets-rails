class Address < ApplicationRecord
  belongs_to :market

  def self.by_state(state)
    joins(:market).where(state: state)
  end
end
