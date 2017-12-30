class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def after_sign_in_path_for(resource)
    stored_location_for(resource) ||
    if resource.is_a?(Vendor)
      @vendor = Vendor.find_by(email: params[:vendor][:email])
      vendor_path(@vendor)
    else
      super
    end
  end
end
