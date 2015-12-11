class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title
      t.string :artist
      t.string :composer
      t.text :description
      t.integer :category_id
      t.string :url
      t.integer :length

      t.timestamps null: false
    end
  end
end
