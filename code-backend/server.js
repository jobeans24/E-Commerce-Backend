const express = require('express'); // import express
const routes = require('./routes'); // import routes
// import sequelize connection

const app = express(); // initialize express
const PORT = process.env.PORT || 3001; // set the port

app.use(express.json()); // set up express app to handle data parsing
app.use(express.urlencoded({ extended: true })); // set up express app to handle data parsing

app.use(routes); // turn on routes

// sync sequelize models to the database, then turn on the server

app.listen(PORT, () => { // listen for connections
  console.log(`Server is running on http://localhost:${PORT}`); // log the port
});