const {Model, DataTypes} = require('sequelize'); // Import the sequelize library

const sequelize = require('../config/connection'); // Import the connection to the database

class Category extends Model {} // Create the Category class that extends the Model class

Category.init( // Initialize the Category model
    {
        category_name: { // Define the category_name column
            type: DataTypes.STRING, // Set the data type to STRING
            allowNull: false, // Do not allow null values
        },
    },
    {
        sequelize, // Pass in the imported sequelize connection
        timestamps: false, // Do not automatically create timestamp fields
        freezeTableName: true, // Use the model's name for the table name
        underscored: true, // Use underscores instead of camel-casing
        modelName: 'category', // Define the model's name as 'category'
    }
);

module.exports = Category; // Export the Category model