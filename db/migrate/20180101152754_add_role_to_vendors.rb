class AddRoleToVendors < ActiveRecord::Migration[5.1]
  def change
    add_column :vendors, :role, :integer, default: 0
  end
end
