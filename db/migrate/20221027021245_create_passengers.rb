class CreatePassengers < ActiveRecord::Migration[6.1]
  def change
    create_table :passengers do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone
      t.string :email
      t.string :birthdate
      t.string :nationality
      t.integer :member_id

      t.timestamps
    end
  end
end
