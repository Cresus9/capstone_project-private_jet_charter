class SessionController < ApplicationController
    skip_before_action :authorized, only: :create
    def create
        member=Member.find_by(email: params[:email])
        if member&.authenticate(params[:password])
            session[:member_id] = member.id
            render json: member
        else
            render json: { error: {login: "Invalid username or password" }}, status: :unauthorized
    end
    def destroy
        session.delete :member_id
        head :no_content
    end
end
end