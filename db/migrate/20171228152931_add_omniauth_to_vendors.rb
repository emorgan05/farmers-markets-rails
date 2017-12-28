class AddOmniauthToVendors < ActiveRecord::Migration[5.1]
  def change
    add_column :vendors, :provider, :string
    add_column :vendors, :uid, :string
  end
end
