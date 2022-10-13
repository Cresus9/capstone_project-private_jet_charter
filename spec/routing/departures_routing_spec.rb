require "rails_helper"

RSpec.describe DeparturesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/departures").to route_to("departures#index")
    end

    it "routes to #show" do
      expect(get: "/departures/1").to route_to("departures#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/departures").to route_to("departures#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/departures/1").to route_to("departures#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/departures/1").to route_to("departures#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/departures/1").to route_to("departures#destroy", id: "1")
    end
  end
end
