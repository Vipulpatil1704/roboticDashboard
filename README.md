# A Robotic Dashboard

This project is a web application that features a frontend built with React and a backend using Node.js and Express. To run this project, you need to have Node.js installed on your machine.

### A Prerequisites
Ensure you have Node.js installed on your machine. If not, download and install it from Node.js official website.

## A Installation
Follow these steps to set up and run the project.

### A Frontend (React)
Navigate to the frontend directory and install the necessary npm modules:

- cd RoboticDashboard/myapp
- npm install
+ Install the following external npm modules:

-  bootstrap

-  chart.js

-  react-chartjs-2

- react-router-dom

To install these modules, run:

- npm install bootstrap chart.js react-chartjs-2 react-router-dom

### A Backend (Node.js and Express)
Navigate to the backend directory and install the necessary npm modules:

- cd RoboticDashboard/myapp/backend
- npm install
Install the following external npm modules:

-  dotenv

- mongoose

- express

To install these modules, run:


npm install dotenv mongoose express
Configuration
Create a .env file in the backend directory with the following content:

- PORT=your_port_number
- MONGO_URI=your_mongodb_uri

Replace your_port_number with the port number you want to use and your_mongodb_uri with your MongoDB URI.

## A Running the Servers
### A React Server
Navigate to the frontend directory and start the React server:

cd RoboticDashboard/myapp
npm start

### A Express Server
Navigate to the backend directory and start the Express server:


cd RoboticDashboard/myapp/backend
node index.js

# A Usage
Once both servers are running, you can access the React frontend by navigating to http://localhost:3000 (or another port if you specified a different one). The frontend will 
