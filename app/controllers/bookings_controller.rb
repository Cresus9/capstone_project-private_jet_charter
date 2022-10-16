class BookingsController < ApplicationController
  before_action :set_booking, only: [:show, :update, :destroy]

  
  def index
    @bookings = Booking.all

    render json: @bookings
  end

  def show
    render json: @booking
  end

  
  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render json: @booking, status: :created, location: @booking
    else
      render json: @booking.errors, status: :unprocessable_entity
    end
  end

  def update
    if @booking.update(booking_params)
      render json: @booking
    else
      render json: @booking.errors, status: :unprocessable_entity
    end
  end

 
  def destroy
    @booking.destroy
  end

  private
    
      @booking = Booking.find(params[:id])
    end

    def booking_params
      params.require(:booking).permit(:number_of_passenger, :is_oneway, :user_id, :jet_id)
    end
end
