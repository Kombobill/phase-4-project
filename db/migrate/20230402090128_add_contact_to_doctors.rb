class AddContactToDoctors < ActiveRecord::Migration[7.0]
  def change
    add_column :doctors, :phone, :integer
  end
end
