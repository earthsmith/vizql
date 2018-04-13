const express = require("express");
const app = express();
const vizql = require('../index.js')()

app.get('/vizql', vizql.pageRoute)

app.listen(3000);
module.exports = app;