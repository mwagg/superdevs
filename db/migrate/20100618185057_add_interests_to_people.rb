class AddInterestsToPeople < ActiveRecord::Migration
  def self.up
    add_column :people, :interests, :string
  end

  def self.down
    remove_column :people, :interests
  end
end
