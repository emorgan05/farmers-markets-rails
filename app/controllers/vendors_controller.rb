class VendorsController < ApplicationController
  def show
    @vendor = Vendor.find(current_vendor)
  end
end
