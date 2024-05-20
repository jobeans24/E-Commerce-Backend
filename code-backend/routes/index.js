const router = require('express').Router(); // Import the express router
const apiRoutes = require('./api'); // Import the API folder

router.use('/api', apiRoutes); // Use the API folder

router.use((req, res) => { // If the route is not found, send a 404 error
    res.send("<h1>Wrong Route!</h1>")
}
);

module.exports = router; // Export the router