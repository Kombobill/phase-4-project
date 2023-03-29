class Patient < ApplicationRecord
  has_secure_password

  belongs_to :nurse
  has_many :appointments
  has_many :doctors, through: :appointments

  validates :name, {
    presence: true,
    uniqueness: true
  }

  validates :condition, {
    presence: true
  }

  validates :nurse_id, {
    presence: true
  }

  validates :password, {
    presence: true
  }
  
end
