//This file creates the example schemas in the sqlite database
const Sequelize = require('sequelize');
const sqlite3 = require('sqlite3').verbose();
const exampleDB2 = new Sequelize('mainDB', null, null, {
  dialect: "sqlite",
  storage: ':memory:',
});

//MODELS
// MOVIES
const movie = exampleDB2.define('movies', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: Sequelize.STRING,
  summary: Sequelize.STRING,
  releaseDate: Sequelize.STRING,
  runtime: Sequelize.STRING,
  posterPath: Sequelize.STRING,
  rating: Sequelize.STRING,
});

// MOVIESPEOPLE


// CHARACTER
const character = exampleDB2.define('character', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  characterName: Sequelize.STRING
});

character.belongsToMany(movie, { as: 'Children', through: 'moviecharacters' })
// PERSONROLES

// ROLES
const role = exampleDB2.define('roles', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  roleType: Sequelize.STRING
});
role.belongsToMany(character, { as: 'Children', through: 'characterroles' })

// TITLEGENRES

// GENRES
const genre = exampleDB2.define('genres', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  genreName: Sequelize.STRING
});
movie.belongsToMany(genre, { as: 'Children', through: 'moviegenres' })

// TVSERIES
const tvseries = exampleDB2.define('tvseries', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: Sequelize.STRING,
  genre: Sequelize.STRING,
  startYear: Sequelize.STRING,
  endYear: Sequelize.STRING
});
tvseries.belongsToMany(genre, { through: 'tvgenres' });
//TVSEASONS
const tvseasons = exampleDB2.define('tvseasons', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  summary: Sequelize.STRING,
  seasonNumber: Sequelize.STRING
});
tvseries.hasMany(tvseasons);

// TVEPISODES
const tvepisodes = exampleDB2.define('tvepisodes', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: Sequelize.STRING,
  summary: Sequelize.STRING,
  airDate: Sequelize.STRING
});
tvseasons.hasMany(tvepisodes);

module.exports = exampleDB2;