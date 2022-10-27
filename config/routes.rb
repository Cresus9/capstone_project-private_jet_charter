Rails.application.routes.draw do
  
  resources :passengers
  resources :bookings
  resources :members
  resources :jets
  # resources :welcomes
  post "/login", to: "members#login"
  get "/profile", to: "members#profile"
  delete "/logout", to: "session#destroy"
  post "/signup", to: "members#create"

  get 'bookings/member/:member_id', to: "bookings#by_member"
  get 'booking/member/:member_id', to: "bookings#upcoming"
  get 'passengers/member/:member_id', to: "passengers#by_member"

	
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
