class Doctor < ApplicationRecord
  has_many :appointments
  has_many :users, through: :appointments

  validates :first_name, :last_name, :specialty, :bio, presence: true

end
