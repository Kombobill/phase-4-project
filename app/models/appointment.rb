class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :doctor

  validates :date, presence: true
  validates :duration, presence: true
  validates :appointment_type, presence: true
end
