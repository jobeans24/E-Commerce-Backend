const router = require('express').Router(); // Import the express router
const apiRoutes = require('./api'); // Import the API folder

router.use('/api', apiRoutes); // Use the API folder


module.exports = router; // Export the router