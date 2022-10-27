class PassengerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :phone, :email, :birthdate, :nationality, :member_id
  belongs_to:member
end
