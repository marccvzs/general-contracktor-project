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

ActiveRecord::Schema[7.0].define(version: 2022_04_11_222602) do
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

  create_table "materials", force: :cascade do |t|
    t.float "price"
    t.string "material"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "notes", force: :cascade do |t|
    t.string "priority"
    t.text "description"
    t.bigint "project_task_id", null: false
    t.bigint "client_id", null: false
    t.bigint "contractor_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_notes_on_client_id"
    t.index ["contractor_id"], name: "index_notes_on_contractor_id"
    t.index ["project_task_id"], name: "index_notes_on_project_task_id"
  end

  create_table "project_task_materials", force: :cascade do |t|
    t.integer "qty"
    t.bigint "material_id", null: false
    t.bigint "project_task_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["material_id"], name: "index_project_task_materials_on_material_id"
    t.index ["project_task_id"], name: "index_project_task_materials_on_project_task_id"
  end

  create_table "project_tasks", force: :cascade do |t|
    t.string "name"
    t.boolean "completed"
    t.integer "hours"
    t.text "description"
    t.bigint "room_id", null: false
    t.bigint "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_tasks_on_project_id"
    t.index ["room_id"], name: "index_project_tasks_on_room_id"
  end

  create_table "projects", force: :cascade do |t|
    t.integer "budget"
    t.integer "num_rooms"
    t.bigint "contractor_id", null: false
    t.bigint "client_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.text "description"
    t.index ["client_id"], name: "index_projects_on_client_id"
    t.index ["contractor_id"], name: "index_projects_on_contractor_id"
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

  create_table "room_projects", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.bigint "room_id", null: false
    t.bigint "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_room_projects_on_project_id"
    t.index ["room_id"], name: "index_room_projects_on_room_id"
  end

  create_table "rooms", force: :cascade do |t|
    t.string "room"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "task_imgs", force: :cascade do |t|
    t.string "img"
    t.bigint "project_task_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_task_id"], name: "index_task_imgs_on_project_task_id"
  end

  add_foreign_key "notes", "clients"
  add_foreign_key "notes", "contractors"
  add_foreign_key "notes", "project_tasks"
  add_foreign_key "project_task_materials", "materials"
  add_foreign_key "project_task_materials", "project_tasks"
  add_foreign_key "project_tasks", "projects"
  add_foreign_key "project_tasks", "rooms"
  add_foreign_key "projects", "clients"
  add_foreign_key "projects", "contractors"
  add_foreign_key "room_imgs", "clients"
  add_foreign_key "room_imgs", "contractors"
  add_foreign_key "room_imgs", "rooms"
  add_foreign_key "room_projects", "projects"
  add_foreign_key "room_projects", "rooms"
  add_foreign_key "task_imgs", "project_tasks"
end
