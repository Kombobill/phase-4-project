class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :duration, :appointment_type
  has_one :patient
  has_one :doctor
end
