const { Model, DataTypes } = require('sequelize'); // Import the sequelize library

const sequelize = require('../config/connection'); // Import the connection to the database

class Tag extends Model {} // Create the Tag class that extends the Model class

Tag.init( // Initialize the Tag model
    {
        id: { // Define the id column
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
        },
        tag_name: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize, // Pass in the imported sequelize connection
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag', // Define the model's name as 'tag'
    }
);

module.exports = Tag; // Export the Tag model