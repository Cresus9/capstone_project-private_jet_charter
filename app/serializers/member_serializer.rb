class MemberSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password, :phone_number


  has_many:bookings
  has_many:jets, through: :bookings
end
