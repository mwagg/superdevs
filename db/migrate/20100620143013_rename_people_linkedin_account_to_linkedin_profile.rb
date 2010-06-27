class RenamePeopleLinkedinAccountToLinkedinProfile < ActiveRecord::Migration
  def self.up
    rename_column :people, :linkedin_account, :linkedin_profile
  end

  def self.down
    rename_column :people, :linkedin_profile, :linkedin_account
  end
end
