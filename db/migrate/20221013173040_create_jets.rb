class CreateJets < ActiveRecord::Migration[6.1]
  def change
    create_table :jets do |t|
      t.string :model
      t.string :manufacturer
      t.string :image
      t.integer :max_range
      t.integer :total_passenger
      t.integer :speed

      t.timestamps
    end
  end
end
