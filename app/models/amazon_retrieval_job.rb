class AmazonRetrievalJob < ActiveRecord::Base
  def self.get_amazon_tracks
    # Get objects from inside the the-golden-record bucket
    # Using objects' information, create and save Track objects and clean out old objects
    s3 = Aws::S3::Client.new(region: "us-east-1")
    bucket_contents = s3.list_objects(bucket: "the-golden-record").contents

    nature_folder = []

    bucket_contents.each do |object|
      if thing.key.include?("Nature/") && thing.key != "Nature/"
        nature_folder << object
      end
    end

    nature_folder.each do |track|
      Track.create(title: track.key.split(".")[0..-2].join, url: "https://the-golden-record.s3.amazonaws.com/Nature/#{track.key}", category: "Nature")
    end

    # bucket_contents.each do |track|
    #   # Tracks need a category
    #   Track.create(title: track.key.split(".")[0..-2].join, url: "https://the-golden-record.s3.amazonaws.com/#{track.key}")
    #   # https://the-golden-record.s3.amazonaws.com/#{track.key}
    # end

  end
end
