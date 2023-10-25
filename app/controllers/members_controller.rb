class MembersController < ApplicationController
  before_action :authorized, only: [:show]


  def index
    @members = Member.all
    render json: @members
  end

  

  def show
    member= Member.find(params[:member_id])
    render json: member
  end


  def login
    member = Member.find_by(email: params[:email])
    if member&.authenticate(params[:password])
      token = generate_token(member:member, token:token)
      render json: {user: member, token: token}
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def create
    member = Member.create!(member_params)
    token = JWT.encode({member_id: member.id}, 'secret')
    render json: member, token:token
  end

  def profile
    token = request.headers["token"]
   
    member_id = decode_token(token)
    if member_id
      render json: Member.find_by(member_id: member_id)
    else
      render json: {error: "401 incorrect token"}, status: 401
    end
  end

  def logout
    member=Member.find_by(id:member_id)
  end



  def update
  @member = Member.update(member_params)
    render json: @member
  end


  private
  def member_params
    params.permit(:first_name,:last_name,:email,:password,:phone_number)
  end
end
