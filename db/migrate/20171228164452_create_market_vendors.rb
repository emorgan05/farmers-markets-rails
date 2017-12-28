class CreateMarketVendors < ActiveRecord::Migration[5.1]
  def change
    create_table :market_vendors do |t|
      t.belongs_to :market_id
      t.belongs_to :vendor_id
      
      t.timestamps
    end
  end
end
