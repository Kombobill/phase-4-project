class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :condition, :password_digest
  has_one :nurse
end
