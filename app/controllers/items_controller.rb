class ItemsController < ApplicationController
  def index
    if params[:vendor_id]
      @items = Vendor.find(params[:vendor_id]).items
    end
  end

end
