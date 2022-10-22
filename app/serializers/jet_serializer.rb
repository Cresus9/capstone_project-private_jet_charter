class JetSerializer < ActiveModel::Serializer
  attributes :id, :model, :manufacturer, :image, :max_range, :total_passenger, :speed

  has_many:bookings
  has_many:members, through: :bookings
end
