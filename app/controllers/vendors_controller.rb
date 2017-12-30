class VendorsController < ApplicationController
  def show
    if current_vendor && current_vendor.id.to_s == params[:id]
      @vendor = Vendor.find(params[:id])
    elsif params[:market_id]
      @vendor = Vendor.find(params[:id])
      render 'details'
    elsif current_vendor && current_vendor.id.to_s != params[:id]
      flash[:notice] = "Please access your profile through the link above"
      redirect_to root_path
    else
      flash[:notice] = "Please login to access your Vendor page"
      redirect_to new_vendor_session_path
    end
  end

  def edit
    @vendor = Vendor.find(params[:id])
  end

  def update
    @vendor = Vendor.find(params[:id])
    @vendor.update(vendor_params)
    redirect_to vendor_path(@vendor)
  end

  private
  def vendor_params
    params.require(:vendor).permit(:shop_name, :description, :contact)
  end
end
