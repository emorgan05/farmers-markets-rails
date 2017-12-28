class MarketsController < ApplicationController
  def show
    @market = Market.find(params[:id])
  end

  def new
    @market = Market.new
    @market.addresses.build
  end

  def create
  end

  private
  def market_params
    params.require(:market).permit(:name, :operating_hours, addresses_attributes: [:street_address_1, :street_address_2, :city, :state, :zip])
  end
end
