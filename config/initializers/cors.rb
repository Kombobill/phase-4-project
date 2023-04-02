Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'http://localhost:4000'
      resource '*', 
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head, :show_appointments, :create_appointment],
      credentials: true
    end
  end