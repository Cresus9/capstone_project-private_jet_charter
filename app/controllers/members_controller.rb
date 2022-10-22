class MembersController < ApplicationController
  skip_before_action :authorized


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
      render json: Member.find(member_id)
    else
      render json: {error: "401 incorrect token"}, status: 401
    end
  end

  def logout
    member=Member.find_by(id:member_id)
  end



  # PATCH/PUT /members/1
  # def update
  # member = @member.update!(member_params)
  #   render json: @member status: :ok
  # end
  # end


  private
  def member_params
    params.permit(:first_name,:last_name,:email,:password,:phone_number)
  end
end
