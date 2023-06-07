# Lead Generation and Management

## About
This project is an example of fullstack project to generate, manage and visualize Leads.

## How to run?
### Backend server

Step 1. run `cd ./backend/`

Step 2. run `npm install`

Step 3. run `npm run start`

This will start a server on `http://localhost:8080/`.

### Contact Sales App

Step 1. run `cd ./frontend/contact-sales-app`

Step 2. run `npm install`

Step 3. run `npm run dev`

This will start the app on `http://localhost:3000/`.
*The app currently has only /contact-sales` route configured*


## Available APIs on backend server
Currently two APIs are avaialble on this server

1. POST `http://localhost:8080/leads` to post a new lead to the MongoDB schema
2. GET `http://localhost:8080/leads` to get leads from the MongoDB. This API supports pagination using qurey parameters `count` and `skip` 
