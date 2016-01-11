class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title
      t.string :artist
      t.text :description
      t.integer :category_id
      t.string :url
      t.string :audio
      t.string :key

      t.timestamps null: false
    end
  end
end
