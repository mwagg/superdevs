class CreatePeople < ActiveRecord::Migration
  def self.up
    create_table :people do |t|
      t.string :full_name
      t.string :tagline
      t.text :bio
      t.string :location
      t.string :company
      t.string :job_title
      t.string :website
      t.string :twitter_username
      t.string :linkedin_account
      t.string :github_account

      t.timestamps
    end
  end

  def self.down
    drop_table :people
  end
end
