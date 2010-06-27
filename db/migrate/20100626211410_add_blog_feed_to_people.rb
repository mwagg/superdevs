class AddBlogFeedToPeople < ActiveRecord::Migration
  def self.up
    add_column :people, :blog_feed, :string
  end

  def self.down
    remove_column :people, :blog_feed
  end
end
