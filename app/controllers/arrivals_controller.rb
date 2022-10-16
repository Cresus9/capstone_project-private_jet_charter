class ArrivalsController < ApplicationController
  before_action :set_arrival, only: [:show, :update, :destroy]

  
  def index
    @arrivals = Arrival.all

    render json: @arrivals
  end

  
  def show
    render json: @arrival
  end

  
  def create
    @arrival = Arrival.new(arrival_params)

    if @arrival.save
      render json: @arrival, status: :created, location: @arrival
    else
      render json: @arrival.errors, status: :unprocessable_entity
    end
  end

  
  def update
    if @arrival.update(arrival_params)
      render json: @arrival
    else
      render json: @arrival.errors, status: :unprocessable_entity
    end
  end

  
  def destroy
    @arrival.destroy
  end

  private
    
      @arrival = Arrival.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def arrival_params
      params.require(:arrival).permit(:date, :time, :location, :booking_id)
    end
end
