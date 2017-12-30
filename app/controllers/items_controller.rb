class ItemsController < ApplicationController
  def index
    @categories = Category.all
    @vendor = Vendor.find(params[:vendor_id])

    if params[:vendor_id] && current_vendor && current_vendor.id.to_s == params[:vendor_id]
      if !params[:category].blank?
        @items = current_vendor.items.where(category: params[:category])
      else
        @items = current_vendor.items
      end
    else
      redirect_to new_vendor_session_path
    end
  end

  def new
    if params[:vendor_id] && current_vendor && current_vendor.id.to_s == params[:vendor_id]
      @item = Item.new
      @vendor = current_vendor
    else
      redirect_to new_vendor_session_path
    end
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
    if params[:vendor_id] && current_vendor && current_vendor.id.to_s == params[:vendor_id]
      @item = Item.find(params[:id])
      @vendor = current_vendor
    else
      redirect_to new_vendor_session_path
    end
  end

  def update
    @item = Item.find(params[:id])
    if @item.update(item_params)
      redirect_to vendor_items_path(current_vendor.id)
    else
      flash[:errors] = @item.errors.full_messages
      redirect_to edit_vendor_item_path(current_vendor.id, @item)
    end
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
