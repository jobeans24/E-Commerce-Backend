const { Model, DataTypes } = require('sequelize'); // Import the sequelize library

const sequelize = require('../config/connection'); // Import the connection to the database

class ProductTag extends Model {} // Create the ProductTag class that extends the Model class

ProductTag.init( // Initialize the ProductTag model
    {
        id: { // Define the id column
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        product_id: { // Define the product_id column
            type: DataTypes.INTEGER,
            references: {
                model: 'product',
                key: 'id',
            },
        },
        tag_id: { // Define the tag_id column
            type: DataTypes.INTEGER,
            references: {
                model: 'tag',
                key: 'id',
            },
        },
    },
    {
        sequelize, // Pass in the imported sequelize connection
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product_tag', // Define the model's name as 'product_tag'
    }
);

module.exports = ProductTag; // Export the ProductTag model