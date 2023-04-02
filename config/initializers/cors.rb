Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*'
      resource '*', 
      headers: :any,
      methods: [:get, :create, :put, :patch, :delete, :options, :head, :show_appointments]
    end
  end