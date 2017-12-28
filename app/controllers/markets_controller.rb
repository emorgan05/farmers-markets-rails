class MarketsController < ApplicationController
  def show
    @market = Market.find(params[:id])
  end

  def new
    @market = Market.new
  end

  def create
  end
end
