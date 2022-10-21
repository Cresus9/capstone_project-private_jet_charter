class BookingsController < ApplicationController
  skip_before_action :authorized

  # GET /bookings
  def index
    @bookings = Booking.all

    render json: @bookings
  end

  # GET /bookings/1
  def show
    render json: @booking
  end

  def by_member
		member_id = params[:member_id]
		bookings = Booking.where(member_id: member_id).order(date: :desc, time: :desc)
		if bookings
			render json: bookings, status: :ok
		else
			render json: { error: "Booking not found" }, status: :not_found
		end
	end

  def upcoming
		today = Date.today.to_time.iso8601.slice(0, 2)
		member_id = params[:member_id]
		bookings = Booking.where(["date >= ? and member_id = ?", today, member_id]).order(:date, :time)
		if bookings
			render json: bookings, status: :ok
		else
			render json: { error: "bookings not found" }, status: :not_found
		end
	end


  # POST /bookings
  def create
    booking=Booking.create!(booking_params)
    render json: booking
  end
   

  # PATCH/PUT /bookings/1
  def update
    if @booking.update(booking_params)
      render json: @booking
    else
      render json: @booking.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bookings/1
  def destroy
    @booking.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_booking
      @booking = Booking.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def booking_params
      params.permit(:total_passenger, :date, :time, :from, :to,)
    end
end
