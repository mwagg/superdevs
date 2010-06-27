require 'spec_helper'

describe PeopleController do
  describe "GET 'show'" do
    it "should load the person from the database" do
      Person.stub(:find).with(42).and_return(mock_person)

      get :show, :id => 42

      response.should be_success
      assigns(:person).should == mock_person
    end
  end

  describe "GET 'edit'" do
    it "should load the person from the database" do
      Person.stub(:find).with(42).and_return(mock_person)

      get :edit, :id => 42

      response.should be_success
      assigns(:person).should == mock_person
    end
  end

  def mock_person(stubs={})
    @mock_person ||= mock_model(Person, stubs).as_null_object
  end
end
