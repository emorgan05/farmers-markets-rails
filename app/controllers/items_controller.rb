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
    @item = Item.new(item_params)
    if @item.save
      redirect_to vendor_items_path(current_vendor.id)
    else
      render 'new'
    end
  end

  def edit
    @item = Item.find(params[:id])
  end

  def update

  end

  private
  def item_params
    params.require(:item).permit(:name, :price, :inventory, :category_id, :vendor_id)
  end
end
