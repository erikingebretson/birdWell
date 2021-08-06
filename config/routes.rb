Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defailts: {format: :json } do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:show, :index]
    resources :reviews, only: [:create, :index, :show]
  end  

  root to: 'static_pages#root'  
end
