# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Deleting seeds..."
ProjectTaskMaterial.destroy_all
Material.destroy_all
ProjectTask.destroy_all
RoomProject.destroy_all
Project.destroy_all
Client.destroy_all
Contractor.destroy_all
Room.destroy_all

puts "🌱 Seeding Clients..."
5.times do
    Client.create(
        name: Faker::Name.name,
        address: Faker::Address.street_address,
        budget: rand(100..200000),
        email: Faker::Internet.unique.email,
        password_digest: Faker::Internet.password,
    )
end

puts "🌱 Seeding Contractors..."
5.times do
   
    Contractor.create(
        name: Faker::Name.name,
        company: Faker::Company.name,
        trade: Faker::Construction.trade,
        email: Faker::Internet.unique.email,
        password_digest: Faker::Internet.password,
    )
end

puts "🌱 Seeding Projects..."
5.times do
    Project.create(
        budget: rand(100..200000),
        num_rooms: rand(1..6),
        contractor_id: Contractor.ids.sample,
        client_id: Client.ids.sample
    )
end

puts "🌱 Seeding Rooms..."
Room.create(room: "living room")
Room.create(room: "bedroom")
Room.create(room: "bathroom")
Room.create(room: "basement")
Room.create(room: "attic")
Room.create(room: "master bedroom")
Room.create(room: "master bathroom")
Room.create(room: "game room")
Room.create(room: "theater")
Room.create(room: "den")
Room.create(room: "kitchen")
Room.create(room: "garage")
Room.create(room: "outdoor")
Room.create(room: "gym")

puts "🌱 Seeding Room Projects..."
10.times do
    RoomProject.create(
        name: Faker::Construction.subcontract_category,
        room_id: Room.ids.sample,
        project_id: Project.ids.sample,
    )
end

puts "🌱 Seeding Materials..."
10.times do
    Material.create(
        price: Faker::Commerce.price,
        material: Faker::Construction.unique.material,
    )
end

puts "🌱 Seeding Project Tasks..."
10.times do
    ProjectTask.create(
        name: Faker::Construction.subcontract_category,
        completed: Faker::Boolean.boolean,
        hours: rand(1..72),
        description: Faker::Lorem.sentence,
        room_id: Room.ids.sample,
        project_id: Project.ids.sample,
    )
end

puts "🌱 Seeding Project Task Materials..."
25.times do
    ProjectTaskMaterial.create(
        qty: rand(1..100),
        material_id: Material.ids.sample,
        project_task_id: ProjectTask.ids.sample,
    )
end

puts "Done!"
