class AmazonRetrievalJob
  def self.get_amazon_stuff
    # Get objects from inside the the-golden-record bucket
    # Using objects' information, create and save Track objects and clean out old objects
    s3 = Aws::S3::Client.new(region: "us-east-1")
    bucket = s3.list_objects(bucket: "the-golden-record")

    bucket.contents.each do |track|

    end

  end
end
