class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :artist
      t.string :composer
      t.text :description
      t.integer :category_id, null: false
      t.string :url, null: false 
      t.integer :length

      t.timestamps null: false
    end
  end
end
