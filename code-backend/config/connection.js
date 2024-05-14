require('dotenv').config(); // require the .env file that is within the code-backend folder

const Sequelize = require('sequelize'); // require the sequelize package

const sequelize = process.env.DB_URL // if the DB_URL environment variable is present, use that value to connect to the database
    ? new Sequelize(process.env.DB_URL) // if the DB_URL environment variable is not present, use the values in the .env file to connect to the database
    : new Sequelize( // create a new Sequelize connection
        process.env.DB_NAME, // pass in the database name
        process.env.DB_USER, // pass in the database user
        process.env.DB_PASSWORD, // pass in the database password
        {
            host: 'localhost', // use the localhost as the host
           dialect: 'postgres', // use the postgres dialect
           dialectOptions: { // set the dialect options
            decimalNumbers: true, // enable decimal numbers
           }
        });

module.exports = sequelize;