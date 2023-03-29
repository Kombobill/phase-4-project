class ApplicationController < ActionController::API

    def authorized
        render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :patient_id
    end

end
