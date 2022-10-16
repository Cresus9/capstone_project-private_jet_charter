class SessionController < ApplicationController
    def profile
        session[:session_hello] ||="world"
        cookies[:cookies_hello] ||="world"
        render json: { session:session, cookies:cookies.to_hash }
    end

    def Create
        User.find(params[:email])
        session[:user_id] = user.id
        render json: user
    end
    def destroy
        session.delete :user_id
        head :no_content
    end
end