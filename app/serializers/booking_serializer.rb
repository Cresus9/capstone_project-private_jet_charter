class BookingSerializer < ActiveModel::Serializer
  attributes :id, :number_of_passenger, :is_oneway, :user_id, :jet_id
end
