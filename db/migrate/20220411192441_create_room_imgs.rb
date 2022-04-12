class CreateRoomImgs < ActiveRecord::Migration[7.0]
  def change
    create_table :room_imgs do |t|
      t.belongs_to :contractor, null: false, foreign_key: true
      t.belongs_to :client, null: false, foreign_key: true
      t.belongs_to :room, null: false, foreign_key: true
      t.string :img

      t.timestamps
    end
  end
end
