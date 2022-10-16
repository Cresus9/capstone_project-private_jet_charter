class Booking < ApplicationRecord
    has_one :arrival
    has_one :departure
    belongs_to :jet
    belongs_to :user
    has_many :users
end
