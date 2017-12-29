class VendorsController < ApplicationController
  def show
    if current_vendor && current_vendor.id.to_s == params[:id]
      @vendor = Vendor.find(params[:id])
    else
      flash[:notice] = "Please login to access your Vendor page"
      redirect_to new_vendor_session_path
    end
  end
end
