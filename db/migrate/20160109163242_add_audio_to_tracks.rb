class AddAudioToTracks < ActiveRecord::Migration
  def self.up
    add_attachment :tracks, :audio
  end

  def self.down
    remove_attachment :tracks, :audio
  end
end
