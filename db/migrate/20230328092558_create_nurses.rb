class CreateNurses < ActiveRecord::Migration[7.0]
  def change
    create_table :nurses do |t|
      t.string :name
      t.string :phone
      t.string :relation

      t.timestamps
    end
  end
end
