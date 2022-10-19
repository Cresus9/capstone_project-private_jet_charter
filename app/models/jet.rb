class Jet < ApplicationRecord
    has_many :bookings
    has_many :members, through: :bookings
end
