class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
	rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
include ActionController::Cookies
before_action :authorized

def authorized
    return render json: { error: "Not authorized" }, status: :unauthorized
    unless session.include? :user_id
    end

end
end
