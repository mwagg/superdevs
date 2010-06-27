class PeopleController < ApplicationController
  def show
    load_person
  end

  def edit
    load_person
  end

  def update
    load_person
    @person.update_attributes!(params[:person])
    redirect_to(@person, :notice => 'Person was successfully updated.')
  rescue RecordNotSaved
    render :action => :edit
  end

  private
  def load_person
    @person = Person.find(params[:id])
  end
end
