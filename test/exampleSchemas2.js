//This file creates the example schemas in the sqlite database
const Sequelize = require('sequelize');
const sqlite3 = require('sqlite3').verbose();
const exampleDB2 = new Sequelize('mainDB', null, null, {
    dialect: "sqlite",
    storage: ':memory:',
});

//MODELS
//USER MODEL
const User = exampleDB2.define('users', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING
});
//ITEM MODEL
const Item = exampleDB2.define('items', {
    description: Sequelize.STRING,
});
//SHOPPINGCART MODEL
const ShoppingCart = exampleDB2.define('cart', {
    numOfitems: Sequelize.INTEGER,
});

//establishes relationships between the models
Item.belongsTo(ShoppingCart);
Item.belongsTo(User);
ShoppingCart.belongsTo(User); 

module.exports = exampleDB2;