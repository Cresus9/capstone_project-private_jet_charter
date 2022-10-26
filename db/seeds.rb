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


Member.create(first_name:"Thierry" ,first_name:"Yabre" ,email:"thierry@gmail.com" ,password_digest:"123" ,phone_number:"233-322-3332")
Member.create(first_name:"Paul" ,last_name:"Numbier" ,email:"Paul@gmail.com" ,password_digest:"178" ,phone_number:"289-322-3332")
Member.create(first_name:"Justin" ,last_name:"Johnson" ,email:"Justin@gmail.com" ,password_digest:"120" ,phone_number:"233-002-3332")
Member.create(first_name:"Ashley" ,last_name:"Dupont" ,email:"ashley@gmail.com" ,password_digest:"023" ,phone_number:"293-322-3332")
Member.create(first_name:"Juste" ,last_name:"Dupont" ,email:"juste@gmail.com" ,password_digest:"098" ,phone_number:"293-302-3332")
Member.create(first_name:"Raina" ,last_name:"Derco" ,email:"raina@gmail.com" ,password_digest:"003" ,phone_number:"293-322-0032")

Jet.create(model:"Bombardier Global 5000" ,manufacturer:"Bombardier" ,image:"https://images.aircharterservice.com/global/aircraft-guide/private-charter/bombardier-global-express-5000-1.jpg" ,max_range:"5500" ,total_passenger:"17", speed:"530")
Jet.create(model:"Gulfstream V" ,manufacturer:"Gulfstream " ,image:"https://images.aircharterservice.com/global/aircraft-guide/private-charter/gulfstream-v-7.jpg" ,max_range:"7300" ,total_passenger:"16" ,speed:"528")
Jet.create(model:"Airbus A-319CJ" ,manufacturer:"Airbus" ,image:"https://images.aircharterservice.com/global/aircraft-guide/private-charter/airbus-a319-cj-3.jpg" ,max_range:"6897" ,total_passenger:"19" ,speed:"629")

# Booking.create(total_passenger:"7",date:"10-25-2022", time:"09:30PM",from:"New York City",to:"Boston" is_oneway:true ,member_id:Member.all.sample.id,jet_id:Jet.all.sample.id )
Booking.create(total_passenger:"4",date:"10-29-2022", time:"10:00PM",from:"Miami",to:"New Haven" ,is_oneway:true ,member_id:Member.all.sample.id,jet_id:Jet.all.sample.id )
Booking.create(total_passenger:"6",date:"10-29-2022", time:"9:00PM",from:"Miami",to:"Las Vegas" ,is_oneway:true ,member_id:Member.all.sample.id,jet_id:Jet.all.sample.id )
Booking.create(total_passenger:"3",date:"10-30-2022", time:"11:00PM", from:"Columbus",to:"Houston" ,is_oneway:true ,member_id:Member.all.sample.id,jet_id:Jet.all.sample.id )


# Departure.create(date:"10-25-2022", time:"09:30PM", location:"New York City", booking_id:Booking.all.sample.id)
# Departure.create(date:"10-29-2022", time:"10:00PM", location:"Miami", booking_id:Booking.all.sample.id)
# Departure.create(date:"10-30-2022", time:"11:00PM", location:"Columbus", booking_id:Booking.all.sample.id)

# Arrival.create(date:"10-26-2022", time:"05:45AM" ,location:"Los Angeles", booking_id:Booking.all.sample.id)
# Arrival.create(date:"10-29-2022", time:"11:55PM" ,location:"New York City", booking_id:Booking.all.sample.id)
# Arrival.create(date:"10-30-2022", time:"11:00PM" ,location:"New Haven", booking_id:Booking.all.sample.id)

