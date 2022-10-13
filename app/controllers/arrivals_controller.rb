class ArrivalsController < ApplicationController
  before_action :set_arrival, only: [:show, :update, :destroy]

  # GET /arrivals
  def index
    @arrivals = Arrival.all

    render json: @arrivals
  end

  # GET /arrivals/1
  def show
    render json: @arrival
  end

  # POST /arrivals
  def create
    @arrival = Arrival.new(arrival_params)

    if @arrival.save
      render json: @arrival, status: :created, location: @arrival
    else
      render json: @arrival.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /arrivals/1
  def update
    if @arrival.update(arrival_params)
      render json: @arrival
    else
      render json: @arrival.errors, status: :unprocessable_entity
    end
  end

  # DELETE /arrivals/1
  def destroy
    @arrival.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_arrival
      @arrival = Arrival.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def arrival_params
      params.require(:arrival).permit(:date, :time, :location, :booking_id)
    end
end
