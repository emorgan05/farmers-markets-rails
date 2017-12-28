class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :price
      t.integer :inventory
      t.belongs_to :vendor, index: true
      t.belongs_to :category, index: true

      t.timestamps
    end
  end
end
