class ArrivalSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :location, :booking_id
end
