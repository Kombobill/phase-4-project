class PatientsController < ApplicationController
   
    def create
        patient = Patient.create!(patient_params)
        session[:patient_id] = patient.id
        render json: patient, status: :created
    end

    private

    def patient_params
        params.permit(:name, :condition, :nurse_id, :password)
    end

end
