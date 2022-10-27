class PassengersController < ApplicationController
  skip_before_action :authorized

  # GET /passengers
  def index
    @passengers = Passenger.all

    render json: @passengers
  end

  # GET /passengers/1
  def show
    render json: @passenger
  end
  
  def by_member
		member_id = params[:member_id]
		passenger = Passenger.where(member_id: member_id)
		if passenger
			render json: passenger, status: :ok
		else
			render json: { error: "passenger not found" }, status: :not_found
		end
	end

  # POST /passengers
  def create
   passenger=Passenger.create(passenger_params)
   render json: passenger
  end

  # PATCH/PUT /passengers/1
  def update
    if @passenger.update(passenger_params)
      render json: @passenger
    else
      render json: @passenger.errors, status: :unprocessable_entity
    end
  end

  # DELETE /passengers/1
  def destroy
    @passenger.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_passenger
      @passenger = Passenger.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def passenger_params
      params.permit(:first_name, :last_name, :email, :phone, :nationality, :member_id, :birthdate)
    end
end
