class CreatePatients < ActiveRecord::Migration[7.0]
  def change
    create_table :patients do |t|
      t.string :name
      t.string :condition
      t.belongs_to :nurse, null: false, foreign_key: true
      t.string :password_digest

      t.timestamps
    end
  end
end
