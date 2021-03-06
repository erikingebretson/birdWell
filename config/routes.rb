Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defailts: {format: :json } do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:create, :show, :index, :destroy, :update]
    resources :reviews, only: [:create, :index, :show]
    resources :carts, only: [:create, :show, :update, :destroy]
  end  

  root to: 'static_pages#root'  
end
