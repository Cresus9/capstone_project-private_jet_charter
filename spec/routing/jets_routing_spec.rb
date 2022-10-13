require "rails_helper"

RSpec.describe JetsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/jets").to route_to("jets#index")
    end

    it "routes to #show" do
      expect(get: "/jets/1").to route_to("jets#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/jets").to route_to("jets#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/jets/1").to route_to("jets#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/jets/1").to route_to("jets#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/jets/1").to route_to("jets#destroy", id: "1")
    end
  end
end
