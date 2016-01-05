class Track < ActiveRecord::Base
	belongs_to :category

  def url
    "https://the-golden-record.s3.amazonaws.com/#{key}"
  end

  def title
    @title ||= key.split(".")[0]
  end

  def artist
    @artist ||= key.split("-")[1]
  end

  # def category
  #   @category ||= "Earth"
  # end
end
