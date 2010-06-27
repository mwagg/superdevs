require 'spec_helper'

describe Gravatar do
  it "should return an image tag that points to a gravatar picture for the specified email address" do
    expected_tag = "<img src=\"http://www.gravatar.com/avatar/a9c8035dc335d61235e2aa025924c903?s=147&d=identicon\" alt=\"Profile picture\" />"
    Gravatar.for_email("soulnafein@gmail.com").to_html.should == (expected_tag)
  end
end
