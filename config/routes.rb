Rails.application.routes.draw do
  
  resources :bookings
  resources :members
  resources :jets
  # resources :welcomes
  post "/login", to: "session#create"
  get "/profile", to: "members#show"
  delete "/logout", to: "session#destroy"
  post "/signup", to: "members#create"

  get 'bookings/memeber/:member_id', to: "bookings#by_member"
  

	
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
