class NursesController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid_response

    rescue_from ActiveRecord::RecordNotFound, with: :render_nurse_not_found_response

    before_action :authorized

    def index
      nurses = Nurse.all

      render json: nurses

    end

    def create

      nurse = Nurse.create(nurse_params)

      render json: nurse

    end

    def show

      nurse = Nurse.find(params[:id])

      render json: nurse, status: :ok

    end

    private

    def nurse_params

      params.permit(:name, :phone, :specialty)

    end

    def render_record_invalid_response(e)

      render json: { errors: e.record.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end

    def render_nurse_not_found_response(e)

        render json: { errors: [{ message: "Nurse not found" }] }, status: :not_found
     
    end

  end