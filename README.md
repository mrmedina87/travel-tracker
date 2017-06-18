# travel-tracker
This is a sandbox. It doesn't have commercial purposes and is used only as an example of my way of working with MEAN stack

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