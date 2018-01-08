class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.belongs_to :vendor, index: true
      t.belongs_to :market, index: true
      t.string :content
      t.integer :rating
      t.timestamps
    end
  end
end
