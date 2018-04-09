class CreateCrafts < ActiveRecord::Migration[5.1]
  def change
    create_table :crafts do |t|
      t.string :title
      t.string :photo_url
      t.string :link_url
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
