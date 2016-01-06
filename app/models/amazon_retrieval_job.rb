class AmazonRetrievalJob < ActiveRecord::Base

  def self.get_amazon_tracks
    # Get objects from inside the the-golden-record bucket
    # Using objects' information, create and save Track objects and clean out old objects
    s3 = Aws::S3::Client.new(region: "us-east-1")
    bucket_contents = s3.list_objects(bucket: "the-golden-record").contents

    # bucket_contents.each do |object|
    #   Track.create(key: object.key)
    # end

    # earth_folder.each do |track|
    #   Track.create(title: track.key.split(".")[0], artist: "", url: "https://the-golden-record.s3.amazonaws.com/#{track.key}", category: "Earth")
    # end

    # music_folder.each do |track|
    #   Track.create(title: track.key.split("-")[0], artist: track.key.split("-")[1].split(".")[0], url: "https://the-golden-record.s3.amazonaws.com/#{track.key}", category: "Music")
    # end

    # nature_folder.each do |track|
    #   Track.create(title: track.key.split(".")[0], artist: "", url: "https://the-golden-record.s3.amazonaws.com/#{track.key}", category: "Nature")
    # end

    # space_folder.each do |track|
    #   Track.create(title: track.key.split(".")[0], artist: "", url: "https://the-golden-record.s3.amazonaws.com/#{track.key}", category: "Space")
    # end
  end

  def self.make_client
    s3 = Aws::S3::Client.new(region: "us-east-1")
  end

  def self.get_bucket_contents(client)
    client.list_objects(bucket: "the-golden-record").contents
  end

  def make_folders


  end

  def self.add_objects_to_folder(bucket_contents)
    earth_array = []
    music_array = []
    nature_array = []
    space_array = []
    # needs to take in empty folders
    # then iterate over bucket_contents
    # and push to each particular empty folder
    bucket_contents.each do |object|
      if object.key.include?("Earth/") && object.key != "Earth/"
        earth_array << object
      elsif object.key.include?("Music/") && object.key != "Music/"
        music_array << object
      elsif object.key.include?("Nature/") && object.key != "Nature/"
        nature_array << object
      elsif object.key.include?("Space/") && object.key != "Space/"
        space_array << object
      end
    end
    full_array = [earth_array, music_array, nature_array, space_array]
  end

  def self.create_tracks_from_folders(folder_array)
    folder_array.each do |folder|
      folder.each do |object|
         track = Track.new(key: object.key)
         track.url = track.url
         track.title = track.title
         track.artist = track.artist
         track.category = track.category
         track.save!
      end
    end
  end

end
