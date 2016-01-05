class TracksController < ApplicationController

  def index
    client = make_client
    bucket_contents = get_bucket_contents(client)

    folder_array = add_objects_to_folder(bucket_contents)
    create_tracks_from_folders(folder_array)

    # @categories = Category.all
    # puts @categories
    @tracks = Track.all
    # # respond_with @tracks
    # render :json => @tracks
    # #@tracks_json = @tracks.to_json
    # # respond_to do |format|
    # #   format.json { render :json => { :tracks => @tracks }}
    # # end
  end

end
