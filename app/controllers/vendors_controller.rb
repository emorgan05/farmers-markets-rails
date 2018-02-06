class VendorsController < ApplicationController
  def show
    @vendor = Vendor.find(params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @vendor }
    end

    # if current_vendor && current_vendor.id.to_s == params[:id]
    #   @vendor = Vendor.find(params[:id])
    # if params[:market_id]
    #   @vendor = Vendor.find(params[:id])
    #   render 'details'
    # elsif current_vendor && current_vendor.id.to_s != params[:id]
    #   flash[:notice] = "Please access your profile through the link above"
    #   redirect_to root_path
    # else
    #   flash[:notice] = "Please login to access your Vendor page"
    #   redirect_to new_vendor_session_path
    # end
  end

  def edit
    @vendor = Vendor.find(params[:id])
    # render json: @vendor
    # respond_to do |format|
    #   format.js { render 'vendors/edit' }
    # end
  end

  def update
    @vendor = Vendor.find(params[:id])
    if @vendor.update(vendor_params)
      respond_to do |format|
        format.html { render :show }
        format.json { render json: @vendor }
      end
      # redirect_to vendor_path(@vendor)
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
