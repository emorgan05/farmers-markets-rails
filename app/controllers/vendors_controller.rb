class VendorsController < ApplicationController
  def show
    @vendor = Vendor.find(params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @vendor }
    end
  end

  def edit
    @vendor = Vendor.find(params[:id])
    render "vendors/edit", layout: false
  end

  def update
    @vendor = Vendor.find(params[:id])
    if @vendor.update(vendor_params)
      render json: @vendor
    else
      flash[:errors] = @vendor.errors.full_messages
      redirect_to edit_vendor_path(@vendor)
    end
  end

  private
  def vendor_params
    params.require(:vendor).permit(:shop_name, :description, :contact, :market_ids)
  end
end
