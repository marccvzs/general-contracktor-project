class CreateContractors < ActiveRecord::Migration[7.0]
  def change
    create_table :contractors do |t|
      t.string :name
      t.string :company
      t.string :trade
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
