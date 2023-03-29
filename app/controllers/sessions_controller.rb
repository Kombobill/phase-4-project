class SessionsController < ApplicationController
  def create
    patient = Patient.find_by(name: params[:name])
    if patient&.authenticate(params[:password])
      session[:patient_id] = patient.id
      render json: patient, status: :created
    else
      render json: { error: 'user not found' }, status: :not_found
    end
  end

  def destroy
    session.delete :patient_id
    render json: { message: 'user has logged out' }, status: 200
  end

  private

  def patient_params
    params.permit(:name, :password)
  end
end
