Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :vendors, controllers: { omniauth_callbacks: 'vendors/omniauth_callbacks' }

  root 'welcome#home'

  resources :markets, only: [:show, :new, :create, :edit, :update, :destroy]

  resources :vendors do
    resources :items, only: [:index, :new, :create, :edit, :update, :destroy]
  end

end
