const router = require('express').Router(); // Import the express router
const categoryRoutes = require('./category-routes'); // Import the category-routes
const productRoutes = require('./product-routes'); // Import the product-routes
const tagRoutes = require('./tag-routes'); // Import the tag-routes

router.use('/categories', categoryRoutes); // Use the category-routes
router.use('/products', productRoutes); // Use the product-routes
router.use('/tags', tagRoutes); // Use the tag-routes

module.exports = router; // Export the router