const path = require('path');
const fs = require('fs');
const convertSchemas = require('./helpers/convertSchema.js')

const middlewareWrapper = schema => {
  const middleware = (req, res, next) => {
    // TODO: Fill this in if we want to use app.use 
    // to collect data
  };

  middleware.pageRoute = (req, res) => {
    // let data = convertSchemas(schema)
    console.log(data)
    const renderedHTML =
      fs.readFileSync(path.join(__dirname, '/public/index.html'))
        .toString()
        .replace(/{{ data }}/g, JSON.stringify(data))
        .replace(/{{ style }}/g, fs.readFileSync(path.join(__dirname, '/public/stylesheets/style.css')))
    res.send(renderedHTML);

  };
  return middleware;
};

let data = {
  users: [
    {
      "content": "id",
      "relation": 0,
      "type": "Number",
    },
    {
      "content": "name",
      "relation": 0,
      "type": "String",
    },
    {
      "content": "createdAt",
      "relation": 0,
      "type": "Date",
    },
    {
      "content": "updatedAt",
      "relation": 0,
      "type": "Date",
    },
  ],
  items: [
    {
      "content": "id",
      "relation": 0,
      "type": "Number",
    },
    {
      "content": "description",
      "relation": 0,
      "type": "String",
    },
    {
      "content": "createdAt",
      "relation": 0,
      "type": "Date",
    },
    {
      "content": "updatedAt",
      "relation": 0,
      "type": "Date",
    },
    {
      "content": "cartId",
      "relation": 1,
      "type": "Number",
    },
    {
      "content": "userId",
      "relation": 1,
      "type": "Number",
    },
  ]
};









module.exports = middlewareWrapper;