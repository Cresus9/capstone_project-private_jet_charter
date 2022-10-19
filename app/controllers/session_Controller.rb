class SessionController < ApplicationController
    skip_before_action :authorized, only: :create
    def Create
        User.find(params[:email])
        if user&.authenticate(password)
            session[:user_id] = user.id
            render json: user :created
        else
            render json: { error: {login: "Invalid username or password" }}, status: :unauthorized
    end
    def destroy
        session.delete :user_id
        head :no_content
    end
end