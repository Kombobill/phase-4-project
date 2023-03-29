Rails.application.routes.draw do

  resources :appointments
  resources :patients, only: [:create, :show, :index]
  resources :nurses
  resources :doctors

  #patients
  put '/reset-password/:name', to: 'patients#reset_password'

  #sessions
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'


end
