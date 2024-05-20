const { Product } = require('../models'); // Import the Product model

const productData = [ // Create an array of product data
    {
        product_name: 'Plain T-Shirt', // Define the product_name column
        price: 14.99,
        stock: 14,
        category_id: 1,
    },
    {
        product_name: 'Running Sneakers',
        price: 90.0,
        stock: 25,
        category_id: 5,
    },
    {
        product_name: 'Branded Baseball Hat',
        price: 22.99,
        stock: 12,
        category_id: 4,
    },
    {
        product_name: 'Top 40 Music Compilation Vinyl Record',
        price: 12.99,
        stock: 50,
        category_id: 3,
    },
    {
        product_name: 'Cargo Shorts',
        price: 29.99,
        stock: 22,
        category_id: 2,
    },
];

const seedProducts = () => Product.bulkCreate(productData); // Create a function named seedProducts that bulk creates data using the array of data

module.exports = seedProducts; // Export the seedProducts function