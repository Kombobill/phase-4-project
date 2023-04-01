Rails.application.routes.draw do

  resources :appointments
  resources :patients, only: [:create]
  resources :nurses
  resources :doctors

  #patients
  put '/reset-password/:name', to: 'patients#reset_password'
  get '/me', to: 'patients#show'
  

  #sessions
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  #appointments
  post '/create_appointment', to: 'appointments#create_appointment'
  get '/patient_appointment', to: 'appointments#show_appointments'


end
