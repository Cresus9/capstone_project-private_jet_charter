# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Jet.destroy_all
Booking.destroy_all
Member.destroy_all
Arrival.destroy_all
Departure.destroy_all

Member.create(first_name:"Thierry" ,last_name:"Yabre" ,email:"thierry@gmail.com" ,password_digest:"123" ,phone_number:"233-322-3332")
Member.create(first_name:"Paul" ,last_name:"Numbier" ,email:"Paul@gmail.com" ,password_digest:"178" ,phone_number:"289-322-3332")
Member.create(first_name:"Justin" ,last_name:"Johnson" ,email:"Justin@gmail.com" ,password_digest:"120" ,phone_number:"233-002-3332")
Member.create(first_name:"Ashley" ,last_name:"Dupont" ,email:"ashley@gmail.com" ,password_digest:"023" ,phone_number:"293-322-3332")

Jet.create(model:"Bombardier Global 5000" ,manufacturer:"Bombardier" ,image:"https://images.aircharterservice.com/global/aircraft-guide/private-charter/bombardier-global-express-5000-1.jpg" ,max_range:"5500" ,total_passenger:"17", speed:"530")
Jet.create(model:"Gulfstream V" ,manufacturer:"Gulfstream " ,image:"https://images.aircharterservice.com/global/aircraft-guide/private-charter/gulfstream-v-7.jpg" ,max_range:"7300" ,total_passenger:"16" ,speed:"528")
Jet.create(model:"Airbus A-319CJ" ,manufacturer:"Airbus" ,image:"https://images.aircharterservice.com/global/aircraft-guide/private-charter/airbus-a319-cj-3.jpg" ,max_range:"6897" ,total_passenger:"19" ,speed:"629")


Booking.create(number_of_passenger:"7", is_oneway:true ,jet_id:Jet.all.sample.id ,user_id:Member.all.sample.id)
Booking.create(number_of_passenger:"4", is_oneway:true ,jet_id:Jet.all.sample.id ,user_id:Member.all.sample.id)

Departure.create(date:"10-25-2022", time:"09:30PM", location:"New York City", booking_id:Booking.all.sample.id)
Departure.create(date:"10-29-2022", time:"10:00PM", location:"Miami", booking_id:Booking.all.sample.id)

Arrival.create(date:"10-26-2022", time:"05:45AM" ,location:"Los Angeles", booking_id:Booking.all.sample.id)
Arrival.create(date:"10-29-2022", time:"11:55PM" ,location:"New York City", booking_id:Booking.all.sample.id)


