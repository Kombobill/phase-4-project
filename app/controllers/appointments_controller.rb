class AppointmentsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid,with: :render_record_invalid_response

    def index
      appointment = Appointment.all
      render json: appointment, status: :ok
    end

    def create
      appointment = Appointment.create!(appointment_params)
      render json: appointment, status: :created
    end

    def show
      appointment = Appointment.find(params[:id])
      render json: appointment, status: :ok
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
<<<<<<< HEAD
  end
end
=======
  
end
>>>>>>> 206e9e01d606455b2ec89ab46bf8e3321f176ec0
