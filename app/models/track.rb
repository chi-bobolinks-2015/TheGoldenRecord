class Track < ActiveRecord::Base
	belongs_to :category
  # This method associates the attribute ":audio" with a file attachment
  has_attached_file :audio

  # Validate the attached audio
 validates_attachment_content_type :audio, :content_type => [ 'audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio' ]

  def generate_url
    "https://the-golden-record.s3.amazonaws.com/#{key}"
  end

  def generate_title
    @title ||= key.split("/")[1].split(".")[0].split("-")[0]
  end

  def generate_artist
    @artist ||= key.split("-")[1]
  end

  def generate_category_id
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
