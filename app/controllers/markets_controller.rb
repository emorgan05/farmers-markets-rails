class MarketsController < ApplicationController
  def show
    @market = Market.find(params[:id])
  end
end
