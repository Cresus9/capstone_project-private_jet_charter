New York Private Jet Charter

A private jet charter app created using Ruby on rails on the backend and React Js handling the user interface.
A user can view and interact with the app once the page loads(landind page).He/She/They can personalized it by creating a user account.From there, lays the possibility of booking a private jet,view all past and upcoming bookings and adding more travelers.Also, a user can update his/her/their basic info, view the list of all passengers added.

Context

this app was created as part of my capstone project from Flatiron School software engineering program.
The BACKEND is support by Ruby on Rails with a PostgreSQL relational database.It uses JWT token to securely code/decode user login info.The FRONTEND is based on the JavaScript library React JS.The styling is done with CSS and Bootstrap.

Database Associations
<img width="592" alt="Screen Shot 2022-10-13 at 10 18 12 AM" src="https://user-images.githubusercontent.com/95922513/204383625-dc9fb5e0-862b-4dc1-80e6-1c9065481f3f.png">

Overview
![project3](https://user-images.githubusercontent.com/95922513/204384087-a7efcf9d-7c6c-4106-9b8a-f17fd3f9712f.jpg)


Running the App

To run the app in development mode, navigate into the root directory.

Run bundle install and npm install --prefix client and install the necessary frontend and backend dependencies.

Run rails db:migrate db:seed to build the database.

Run rails s to launch the backend server at http://localhost:3000.

In a separate terminal, run npm start --prefix client to run the app on http://localhost:4000.
