Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :vendors, controllers: { omniauth_callbacks: 'vendors/omniauth_callbacks' }
  # devise_scope :vendor do
  #   delete 'sign_out', :to => 'devise/sessions#destroy', :as => :destroy_vendor_session
  # end

  root 'welcome#home'
  resources :markets
  resources :vendors
end
