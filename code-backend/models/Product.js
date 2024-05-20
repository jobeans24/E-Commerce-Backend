const { Model, DataTypes } = require('sequelize'); // Import the sequelize library
const sequelize = require('../config/connection'); // Import the connection to the database

class Product extends Model {} // Create the Product class that extends the Model class

Product.init( // Initialize the Product model
    {
        product_name: { // Define the product_name column
            type: DataTypes.STRING, // Set the data type to STRING
            allowNull: false, // Do not allow null values
        },
        price: { // Define the price column
            type: DataTypes.DECIMAL, // Set the data type to DECIMAL
            allowNull: false, // Do not allow null values
            validate: { // Set the validation rules for the price column
                isDecimal: true, // The price must be a decimal value
            },
        },
        stock: { // Define the stock column
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
            validate: {
                isNumeric: true,
            },
        },
        category_id: { // Define the category_id column
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
            },
        },
    },
    {
        sequelize, // Pass in the imported sequelize connection
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product; // Export the Product model