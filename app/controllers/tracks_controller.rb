class TracksController < ApplicationController

  def index
    @categories = Category.all
    puts @categories
    @tracks = Track.all
    # # respond_with @tracks
    # render :json => @tracks
    # #@tracks_json = @tracks.to_json
    # # respond_to do |format|
    # #   format.json { render :json => { :tracks => @tracks }}
    # # end
  end

end
