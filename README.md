# VizQL

**Sequelize database schema visualizer.**

## Features

* VizQL reads a Sequelize schema from a database connection and renders a visualization of the schema on an express route chosen by the user.

## Installation and Use

Install using [NPM](https://docs.npmjs.com/getting-started/what-is-npm).
```
npm install vizql
```
Then use it in your [Node.js](http://nodejs.org/) as follows:

```javascript
const express = require('express');
const app = express();
let vizql = require('vizql');
const Sequelize = require('sequelize');
const sqlite3 = require('sqlite3');
const exampleDB = new Sequelize('mainDB', null, null, {
    dialect: "sqlite",
    storage: ':memory:',
});
// Add Sequalize models where appropriate
const User = exampleDB.define('users', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: Sequelize.STRING
});

app.get('/vizql', vizql(exampleDb).pageRoute);

app.listen(3000);

module.exports = app;
```

## License 
[MIT License](https://opensource.org/licenses/MIT)
