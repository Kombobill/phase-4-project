Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'https://6429c255a714793536aef067--quikhealth.netlify.app/'
      resource '*', 
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head, :show_appointments, :create_appointment],
      credentials: true
    end
  end