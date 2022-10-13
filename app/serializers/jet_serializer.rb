class JetSerializer < ActiveModel::Serializer
  attributes :id, :model, :manufacturer, :image, :max_range, :total_passenger, :speed
end
