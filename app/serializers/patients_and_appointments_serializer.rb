class PatientsAndAppointmentsSerializer < ActiveModel::Serializer
  attributes :id, :name, :condition
  has_many :appointments
  belongs_to :doctor, serializer: DoctorSerializer
end
