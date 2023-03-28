class Patient < ApplicationRecord
  belongs_to :nurse
  has_many :appointments
  has_many :doctors, through: :appointments
end
