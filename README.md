# travel-tracker

This is a sandbox. It doesn't have commercial purposes and is used only as an example of a way of working with MEAN stack.

*Travel-tracker* is a web app that you can use to track your travels and the search them by date. There are two types of users:
*Admin*: can CRUD admin and non-admin users;
*NonAdmin*: can CRUD travels;

When you install Travel-tracker, it will allow you to signup (will redirect to signup page the first time); there you can create your first user (/signup will  create an admin user only the first time).
Then you can create your own non-admin users and start managing your travels. If you installed MongoDB and NodeJs correctly, the webapp will create the database the first time you signup.

Hope you like it.

## Setup

### 1 - Install [NodeJs](https://nodejs.org/en/download/) and [MongoDb](https://docs.mongodb.com/manual/installation)

You have to run mondod before going on with the next step.

### 2 - clone this repo:

git clone https://github.com/mrmedina87/travel-tracker

### 3 - Install backend dependencies

cd travel-tracker
npm install
node server.js

(At this point, the console should say: 
Try accessing to localhost:8080)

### 4 - Install frontend dependencies

cd public
npm install

### 5 - Check if it worked

go to localhost:8080 and create an user

## Setup Troubleshooting

Windows users might find problems while running npm install on their environments; Those issues should be solved after running this:

npm install --global --production windows-build-tools

[Source](https://stackoverflow.com/questions/21658832/npm-install-error-msb3428-could-not-load-the-visual-c-component-vcbuild-ex)

## Documentation API

### USERS (always Authorization's header: jwt token)

GET http://localhost:8080/api/users
returns all users

POST http://localhost:8080/api/users
creates new user
name: string 
password: string
admin: string 

PUT http://localhost:8080/api/users
updates user
name: string 
password: string
admin: string 

DELETE http://localhost:8080/api/users/:name
deletes user
name: string

### TRAVELS (always Authorization's header: jwt token)

GET http://localhost:8080/api/travels
returns all travels

GET http://localhost:8080/api/travels/:start/:end
return travels filtered by dates
start: integer (date in miliseconds)
end: integer (date in miliseconds)

POST http://localhost:8080/api/travels
creates new travel
comment: string 
destination: string
end: date 
start: date

PUT http://localhost:8080/api/travels
updates travel
comment: string 
destination: string
end: date 
start: date
_id: string

DELETE http://localhost:8080/api/travels/:id
deletes travel
id: string

### LOGIN AND SIGNUP

GET http://localhost:8080/api/login
returns whether is empty of users or not

POST http://localhost:8080/api/login
creates jwt token
userName: string
password: manano87medina

POST http://localhost:8080/api/signup
creates new user
userName: string
password: string