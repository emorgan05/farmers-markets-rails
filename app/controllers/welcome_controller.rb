class WelcomeController < ApplicationController
  def home
    @addresses = Address.all

    if !params[:address].blank?
      @markets = Market.where(address).include(params[:address])
    else
      @markets = Market.all
    end
  end
end
