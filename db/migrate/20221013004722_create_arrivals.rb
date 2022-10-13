class CreateArrivals < ActiveRecord::Migration[6.1]
  def change
    create_table :arrivals do |t|
      t.string :date
      t.string :time
      t.string :location
      t.integer :booking_id

      t.timestamps
    end
  end
end
