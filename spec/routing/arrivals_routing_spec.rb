require "rails_helper"

RSpec.describe ArrivalsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/arrivals").to route_to("arrivals#index")
    end

    it "routes to #show" do
      expect(get: "/arrivals/1").to route_to("arrivals#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/arrivals").to route_to("arrivals#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/arrivals/1").to route_to("arrivals#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/arrivals/1").to route_to("arrivals#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/arrivals/1").to route_to("arrivals#destroy", id: "1")
    end
  end
end
