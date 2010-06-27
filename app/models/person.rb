class Person < ActiveRecord::Base
  def profile_picture
    Gravatar.new(self.email)
  end
end
