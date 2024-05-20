const Product = require('./Product'); // Import the Product model
const Category = require('./Category'); // Import the Category model
const Tag = require('./Tag'); // Import the Tag model
const ProductTag = require('./ProductTag'); // Import the ProductTag model

Product.belongsTo(Category, { // Create associations between the models
    foreignKey: 'category_id', 
});

Category.hasMany(Product, { // Create associations between the models
    foreignKey: 'category_id',
});

Product.belongsToMany(Tag, { // Create associations between the models
    through: ProductTag,
    foreignKey: 'product_id',
});

Tag.belongsToMany(Product, { // Create associations between the models
    through: ProductTag,
    foreignKey: 'tag_id',
});

module.exports = { // Export the models
    Product,
    Category,
    Tag,
    ProductTag,
};