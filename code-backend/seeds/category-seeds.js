const {Category} = require('../models'); // Import the Category model

const categoryData = [ // Create an array of category data
    {
        category_name: 'Shirts', // Define the category_name column
    },
    {
        category_name: 'Shorts', 
    },
    {
        category_name: 'Music',
    },
    {
        category_name: 'Hats',
    },
    {
        category_name: 'Shoes',
    },
    ];

const seedCategories = () => Category.bulkCreate(categoryData); // Create a function named seedCategories that bulk creates data using the array of data

module.exports = seedCategories; // Export the seedCategories function