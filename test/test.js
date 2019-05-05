const express = require("express");
const app = express();
let vizql = require('../index.js')
const exampleDB = require('./movieSchema.js')
// const exampleDB = require('./exampleSchemas2.js')
vizql = vizql(exampleDB)

app.get('/vizql', vizql.pageRoute)

app.listen(3000);
module.exports = app;