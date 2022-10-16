Rails.application.routes.draw do
  
  resources :members
  resources :jets
  resources :arrivals
  resources :departures
  resources :bookings
  # resources :welcomes
  get "/profile", to: "session#profile"
  post "/login", to "session#create"
  get "/me", to "users#show"
  delete "/logout", to: "session#destroy"
  

	
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
