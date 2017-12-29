class MarketsController < ApplicationController
  def show
    @market = Market.find(params[:id])
  end

  def new
    if current_vendor
      @market = Market.new
      @market.addresses.build
    else
      redirect_to new_vendor_session_path
    end
  end

  def create
    @market = Market.new(market_params)
    if @market.save
      redirect_to market_path(@market)
    else
      render :new
    end
  end

  def edit
    if current_vendor
      @market = Market.find(params[:id])
    else
      redirect_to new_vendor_session_path
    end
  end

  def update
    @market = Market.find(params[:id])
    @market.update(market_params)
    redirect_to market_path(@market)
  end

  def destroy
    @market = Market.find(params[:id])
    @market.destroy
    redirect_to root_path
  end

  private
  def market_params
    params.require(:market).permit(:name, :operating_hours, addresses_attributes: [:street_address_1, :street_address_2, :city, :state, :zip])
  end
end
