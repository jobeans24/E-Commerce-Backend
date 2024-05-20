# E-Commerce Backend Code

## USER STORY

As a manager at an internet retail company

I want a back end for my e-commerce website that uses the latest technologies

So that my company can compete with other e-commerce companies

## ACCEPTANCE CRITERIA

* Its done when I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file and I am able to connect to a database using Sequelize

* Its done when I enter schema and seed commands and a developement database is created and is seeded with test data

* Its done when I enter the command to invoke the application and my server is started and the Sequelize models are synced to the PostgreSQL database

* Its done when I open the API GET routes in Insomnia Core for categories, products, or tags and the data for each of these routes are displayed in a formatted JSON

* Its doen when I test API POST, PUT, and DELETE routes in Insomnia Core and I am able to successfully create, update, and delete data in my database

## DESCRIPTION

This backend coding allows me to create a database and test whether the information that is embedded within the code can be obtained, created, updated, or deleted. It allows me as the user to see all information with the database in JSON format and allow me to make and additions or changes that are needed as my staff and possibly company changes.

##  VIDEO LINKS

### Get Requests Link

The following hyperlink presents a YouTube video that shows the different GET requests made through Insomnia. The order of the GET requests are as such

* GET all categories using "/api/categories"
* GET all tags using "/api/tags"
* GET all products using "/api/products"
* GET product ID 1 using "/api/products/1"
* GET category ID 3 using "/api/categories/3"
* GET tag ID 2 using "/api/tags/2"

[GET Requests ](https://youtu.be/94X5cf_1Oos)

### POST, PUT, and DELETE Requests Link

The following hyperlink presents a YouTube video that shows a POST request into categories creating a new category, a PUT request to update the category that was newly made, and a DELETE request to destroy the newly made category

* POST will make a category called "Undergarments" by using "/api/categories/"
* PUT will update the newly made category to "Underwear" by accessing it id number through "/api/categories/7"
* DELETE will destroy the "Underwear" category by using "/api/categories/7"

[POST, PUT, DELETE Requests](https://youtu.be/ACJutjkb5DU)

