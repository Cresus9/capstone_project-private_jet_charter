class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.integer :number_of_passenger
      t.boolean :is_oneway
      t.integer :user_id
      t.integer :jet_id

      t.timestamps
    end
  end
end
