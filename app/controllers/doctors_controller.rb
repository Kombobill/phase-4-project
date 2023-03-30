class DoctorsController < ApplicationController
  before_action :authorized
  
  def index
    doctor = Doctor.all
    render json: doctor, status: :ok
  end
  
end
