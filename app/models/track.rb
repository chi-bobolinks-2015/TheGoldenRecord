class Track < ActiveRecord::Base
	belongs_to :category

  def url
    "https://the-golden-record.s3.amazonaws.com/#{key}"
  end

  def title
    @title ||= key.split("/")[1].split(".")[0].split("-")[0]
  end

  def artist
    @artist ||= key.split("-")[1].split(".")[0]
  end

  def category_id
    name = key.split("/")[0]
    case name
    when "Beats"
      @category = 1
    when "Earth"
      @category = 2
    when "Music"
      @category = 3
    when "Nature"
      @category = 4
    when "Sound Effects"
      @category = 5
    when "Space"
      @category = 6
    end
  end
end
