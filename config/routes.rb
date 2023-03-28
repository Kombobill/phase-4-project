Rails.application.routes.draw do
  resources :appointments
  resources :patients
  resources :nurses
  resources :doctors


  get '/login', to: 'sessions#create'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
