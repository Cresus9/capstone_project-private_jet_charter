class AddPriceToJets < ActiveRecord::Migration[6.1]
  def change
    add_column :jets, :price, :string
  end
end
