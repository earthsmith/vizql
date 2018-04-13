//This file creates the example schemas in the sqlite database
const Sequelize = require('sequelize');
const sqlite3 = require('sqlite3').verbose();
const exampleDB = new Sequelize('mainDB', null, null, {
    dialect: "sqlite",
    storage: ':memory:',
});

//MODELS
//USER MODEL
const User = exampleDB.define('users', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING
});
//POST MODEL
const Post = exampleDB.define('posts', {
    votes: Sequelize.INTEGER,
});

Post.belongsTo(User); //establishes a relationship between the user and the post

module.exports = exampleDB;