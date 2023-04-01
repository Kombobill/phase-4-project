Rails.application.routes.draw do

  resources :appointments
  resources :patients, only: [:create]
  resources :nurses
  resources :doctors

  #patients
  put '/reset-password/:name', to: 'patients#reset_password'
  get '/me', to: 'patients#show'
  get '/patient-appointment', to: 'patients#appointments'

  #sessions
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'


end
