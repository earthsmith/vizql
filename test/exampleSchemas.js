//This file creates the example schemas in the sqlite database
const Sequelize = require('sequelize');
const sqlite3 = require('sqlite3').verbose();
// const exampleDB = new sqlite3.Database(':memory:');
const exampleDB = new Sequelize('mainDB', null, null, {
    dialect: "sqlite",
    storage: ':memory:',
});

exampleDB
    .authenticate()
    .then(function (err) {
        if (err) console.log('Unable to connect to the database.', err);
        // console.log('Connection has been established successfully.');
    });

//MODELS
//USER MODEL
const User = exampleDB.define('user', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING
});
//POST MODEL
const Post = exampleDB.define('post', {
    votes: Sequelize.INTEGER,
});

Post.belongsTo(User); //establishes a relationship between the user and the post

//SYNC SCHEMA
exampleDB
    .sync({ force: true }) //force syncs all the models
    .then(function (err) {
        if (err) console.log('An error occured while creating the table', err);
        // console.log('It worked!');
        return User.create({
            name: 'Hancock'
          });
    });

// User.findAll().then(users => {
//     console.log(users)
// })

