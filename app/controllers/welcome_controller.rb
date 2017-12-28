class WelcomeController < ApplicationController
  def home
    @markets = Market.all
  end
end
