const { Tag } = require('../models'); // Import the Tag model

const tagData = [ // Create an array of tag data
    {
        tag_name: 'rock music',
    },
    {
        tag_name: 'pop music',
    },
    {
        tag_name: 'blue',
    },
    {
        tag_name: 'red',
    },
    {
        tag_name: 'green',
    },
    {
        tag_name: 'white',
    },
    {
        tag_name: 'gold',
    },
    {
        tag_name: 'pop culture',
    },
];

const seedTags = () => Tag.bulkCreate(tagData); // Create a function named seedTags that bulk creates data using the array of data

module.exports = seedTags; // Export the seedTags function