Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :vendors, controllers: { omniauth_callbacks: 'vendors/omniauth_callbacks' }

  root 'welcome#home'

  resources :markets
  resources :vendors
  resources :items
end
