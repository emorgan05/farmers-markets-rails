class Vendors::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    # You need to implement the method below in your model (e.g. app/models/user.rb)
    @vendor = Vendor.from_omniauth(request.env["omniauth.auth"])

    if @vendor.persisted?
      sign_in_and_redirect @vendor, event: :authentication #this will throw if @vendor is not activated
      set_flash_message(:notice, :success, kind: "Facebook") if is_navigational_format?
    else
      session["devise.facebook_data"] = request.env["omniauth.auth"]
      redirect_to new_vendor_registration_path
    end
  end

  def failure
    redirect_to root_path
  end
end
