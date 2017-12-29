class ItemsController < ApplicationController
  def index
    if params[:vendor_id]
      @items = Vendor.find(params[:vendor_id]).items
    end
  end

  def new
    @item = Item.new
    @vendor = current_vendor
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
    @vendor = current_vendor
  end

  def update
    @item = Item.find(params[:id])
    @item.update(item_params)
    redirect_to vendor_items_path(current_vendor.id)
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    redirect_to vendor_items_path(current_vendor.id)
  end

  private
  def item_params
    params.require(:item).permit(:name, :price, :inventory, :category_id, :vendor_id)
  end
end
