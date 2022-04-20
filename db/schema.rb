# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_04_19_190618) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "clients", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.integer "budget"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contractors", force: :cascade do |t|
    t.string "name"
    t.string "company"
    t.string "trade"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "posts", force: :cascade do |t|
    t.bigint "client_id", null: false
    t.bigint "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_posts_on_client_id"
    t.index ["project_id"], name: "index_posts_on_project_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.bigint "client_id", null: false
    t.integer "num_rooms"
    t.integer "budget"
    t.string "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "completed"
    t.string "img"
    t.index ["client_id"], name: "index_projects_on_client_id"
  end

  create_table "room_imgs", force: :cascade do |t|
    t.bigint "contractor_id", null: false
    t.bigint "client_id", null: false
    t.bigint "room_id", null: false
    t.string "img"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_room_imgs_on_client_id"
    t.index ["contractor_id"], name: "index_room_imgs_on_contractor_id"
    t.index ["room_id"], name: "index_room_imgs_on_room_id"
  end

  create_table "rooms", force: :cascade do |t|
    t.string "room"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "posts", "clients"
  add_foreign_key "posts", "projects"
  add_foreign_key "projects", "clients"
  add_foreign_key "room_imgs", "clients"
  add_foreign_key "room_imgs", "contractors"
  add_foreign_key "room_imgs", "rooms"
end
