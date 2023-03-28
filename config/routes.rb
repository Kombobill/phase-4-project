Rails.application.routes.draw do

  resources :appointments
  resources :patients
  resources :nurses
  resources :doctors

  #sessions
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end
