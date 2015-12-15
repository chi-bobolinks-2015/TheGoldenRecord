class TracksController < ApplicationController

  def index
    AmazonRetrievalJob.get_amazon_tracks
    redirect_to '/tracks'
  end

end
