Rails.application.routes.draw do
  
  resources :appointments
  resources :patients
  resources :nurses
  resources :doctors

  #sessions
  get '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'

end
