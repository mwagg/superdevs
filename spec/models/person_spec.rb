require 'spec_helper'

describe Person do
  it "should have a profile picture" do
    person = Person.new(:email => "soulnafein@gmail.com")
    person.profile_picture.should == Gravatar.for_email("soulnafein@gmail.com")
  end
end
