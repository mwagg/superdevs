class AddPhoneNumberToPeople < ActiveRecord::Migration
  def self.up
    add_column :people, :phone_number, :string
  end

  def self.down
    remove_column :people, :phone_number
  end
end
