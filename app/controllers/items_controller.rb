class ItemsController < ApplicationController
  def index
    if params[:vendor_id]
      @items = Vendor.find(params[:vendor_id]).items
    end
  end

  def new
    @item = Item.new
  end

  def create
    raise params.inspect
  end

  private
  def item_params
    params.require(:items).permit(:name, :price, :inventory, :category_id, :vendor_id)
  end
end
