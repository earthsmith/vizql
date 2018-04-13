# VizQL
------
**Sequelize database schema visualizer.**

## Features
------
* VizQL reads a Sequelize schema from a database connection and renders a visualization of the schema on an express route chosen by the user.

## Installation and Use
------
Install using [NPM](https://docs.npmjs.com/getting-started/what-is-npm).
```
npm install vizql
```
Then use it in your [Node.js](http://nodejs.org/) as follows:

```javascript
const express = require('express');
const app = express();
const vizql = require('vizql')();

app.get('/vizql', vizql.pageRoute)

app.listen(3000);

module.exports = app;
```

## License 
[MIT License](https://opensource.org/licenses/MIT)
