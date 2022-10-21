class MemberSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password, :phone_number
end
