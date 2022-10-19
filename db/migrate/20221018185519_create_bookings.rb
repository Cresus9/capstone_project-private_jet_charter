class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.integer :total_passenger
      t.string :date
      t.string :time
      t.string :from
      t.string :to
      t.boolean :is_oneway
      t.integer :member_id
      t.integer :jet_id

      t.timestamps
    end
  end
end
