class JetsController < ApplicationController
  skip_before_action :authorized
 

  # GET /jets
  def index
    @jets = Jet.all
    render json: @jets
  end

  # GET /jets/1
  def show
    render json: @jet
  end

  # POST /jets
  def create
    @jet = Jet.new(jet_params)

    if @jet.save
      render json: @jet, status: :created, location: @jet
    else
      render json: @jet.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /jets/1
  def update
    if @jet.update(jet_params)
      render json: @jet
    else
      render json: @jet.errors, status: :unprocessable_entity
    end
  end

  # DELETE /jets/1
  def destroy
    @jet.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_jet
      @jet = Jet.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def jet_params
      params.permit(:model, :manufacturer, :image, :max_range, :total_passenger, :speed)
    end
end
