class DeparturesController < ApplicationController
  before_action :set_departure, only: [:show, :update, :destroy]

  # GET /departures
  def index
    @departures = Departure.all

    render json: @departures
  end

  # GET /departures/1
  def show
    render json: @departure
  end

  # POST /departures
  def create
    @departure = Departure.new(departure_params)

    if @departure.save
      render json: @departure, status: :created, location: @departure
    else
      render json: @departure.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /departures/1
  def update
    if @departure.update(departure_params)
      render json: @departure
    else
      render json: @departure.errors, status: :unprocessable_entity
    end
  end

  # DELETE /departures/1
  def destroy
    @departure.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_departure
      @departure = Departure.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def departure_params
      params.require(:departure).permit(:date, :time, :location, :booking_id)
    end
end
