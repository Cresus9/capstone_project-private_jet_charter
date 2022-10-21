class BookingSerializer < ActiveModel::Serializer
  attributes :id, :total_passenger, :date, :time, :from, :to, :is_oneway, :member_id, :jet_id
end
