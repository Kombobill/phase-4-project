class PatientsController < ApplicationController

rescue_from ActiveRecord::RecordInvalid , with: :record_is_invalid
   
    def create
        patient = Patient.create!(patient_params)
        session[:patient_id] = patient.id
        render json: patient, status: :created
    end

    private

    def patient_params
        params.permit(:name, :condition, :nurse_id, :password)
    end

    def record_is_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
