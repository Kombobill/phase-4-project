class SessionsController < ApplicationController

    def create
    
    end

    def destroy

    end

    private

    def patient_params
        params.permit(:name, :password)
    end
    
end
