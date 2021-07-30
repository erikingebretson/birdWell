Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # namespace :api, defailts: {format: :json } do
  #   # routes go here
  # end  

  root to: 'static_pages#root'  
end
