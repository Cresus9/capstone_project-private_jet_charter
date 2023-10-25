class ApplicationController < ActionController::API
    before_action :authorized
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
	rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
 #rescue from JWT::DecodeError, with: :render_unauthorized_response
 



    def get_secret_key
		"moi"
	end

	def generate_token(member_id)
		JWT.encode({ member_id:member_id }, get_secret_key)
	end

	def decode_token(token)
		JWT.decode(token, get_secret_key)[0]["member_id"]
	end


    private

	def render_not_found_response(exception)
		render json: { error: "#{exception.model} not found" }, status: :not_found
	end

	def render_unprocessable_entity_response(exception)
		render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
	end


end
