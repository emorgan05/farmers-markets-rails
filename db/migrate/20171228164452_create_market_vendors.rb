class CreateMarketVendors < ActiveRecord::Migration[5.1]
  def change
    create_table :market_vendors do |t|
      t.belongs_to :market, index: true
      t.belongs_to :vendor, index: true

      t.timestamps
    end
  end
end
