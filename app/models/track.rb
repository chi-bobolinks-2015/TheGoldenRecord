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

  def category
    name = key.split("/")[0]
    case name
    when "Earth"
      @category = 1
    when "Music"
      @category = 2
    when "Nature"
      @category = 3
    when "Space"
      @category = 4
    end
  end
end
