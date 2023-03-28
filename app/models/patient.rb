class Patient < ApplicationRecord
  has_secure_password
  belongs_to :nurse
  has_many :appointments
  has_many :doctors, through: :appointments
end
