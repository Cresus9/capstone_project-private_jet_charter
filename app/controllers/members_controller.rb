class MembersController < ApplicationController
  skip_before_action :authorized

  # GET /members
  def index
    @members = Member.all
    render json: @members
  end


  def login
    user = Member.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def create
    member = Member.create(member_params)
    render json: member, status: :created
  end
  # PATCH/PUT /members/1
  # def update
  # user = @member.update!(member_params)
  #   render json: @member status: :ok
  # end
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_member
      @member = Member.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def member_params
      params.permit(:first_name, :last_name, :email, :password_digest, :phone_number)
    end
  end
