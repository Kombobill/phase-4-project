class PatientsController < ApplicationController
 
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_is_invalid
  before_action :authorized, only: [:show, :appointments]

  def create
    patient = Patient.create!(patient_params)
    session[:patient_id] = patient.id
    render json: patient, status: :created
  end

  def show
    patient = Patient.find(session[:patient_id])
    render json: patient, status: 200
  end

  def appointments
    patient = Patient.find(session[:patient_id])
    render json: patient, Serializer: PatientsAndAppointmentsSerializer
  end

  def reset_password
    patient = Patient.find_by(name: params[:name])
    if patient.nil?
      render json: { error: 'User not found' }, status: :not_found
    else
      patient.update!(params.permit(:password))
      render json: patient, status: :created
    end
  end

  private

  def patient_params
    params.permit(:name, :condition, :nurse_id, :password)
  end

  def record_is_invalid(invalid)
    render json: {
             errors: invalid.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end

  def record_not_found
    render json: { error: 'Patient not found' }, status: :not_found
  end

end
