Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'https://quikhealth-l66y.onrender.com/appointments'
      resource '*', 
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end
  end