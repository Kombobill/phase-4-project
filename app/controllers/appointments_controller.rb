class AppointmentsController < ApplicationController
  
    rescue_from ActiveRecord::RecordInvalid,with: :render_record_invalid_response

    before_action :authorized
    
    def index
      appointment = Appointment.all
      render json: appointment, status: :ok
    end

    def show_appointments
      patient = Patient.find(session[:patient_id])
      appointments = patient.appointments
      render json: appointments, status: :ok
    end

    def create_appointment
      patient = Patient.find(session[:patient_id])
      appointment = patient.appointments.create!(appointment_params)
      render json: appointment, status: :created
    end

    def destroy
      appointment = Appointment.find_by(id: params[:id])
      appointment.destroy
      head :no_content
    end

    def update
      appointment = Appointment.find_by(id: params[:id])
      appointment.update!(appointment_params)
    end

    private

    def appointment_params
      params.permit(
        :patient_id,
        :doctor_id,
        :date,
        :duration,
        :appointment_type,
      )
    end

    def render_record_invalid_response(e)
      render json: {
               errors: e.record.errors.full_messages,
             },
             status: :unprocessable_entity
    end

   
  
end
