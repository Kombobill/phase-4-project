class DoctorsController < ApplicationController
  def index
    doctor = Doctor.all
    render json: doctor, status: :ok
  end
end
