const path = require('path');
const fs = require('fs');
const convertSchemas = require('./helpers/convertSchema.js');
const convertEdges = require('./helpers/convertEdges.js')

const middlewareWrapper = schema => {
  const middleware = (req, res, next) => {
    // TODO: Fill this in if we want to use app.use 
    // to collect data
  };

  middleware.pageRoute = (req, res) => {
    let data = convertSchemas(schema);
    let refCount = convertEdges(schema);
    const renderedHTML =
      fs.readFileSync(path.join(__dirname, '/public/index.html'))
        .toString()
        .replace(/{{ refCount }}/g, JSON.stringify(refCount))
        .replace(/{{ data }}/g, JSON.stringify(data))
        .replace(/{{ style }}/g, fs.readFileSync(path.join(__dirname, '/public/stylesheets/style.css')))
    res.send(renderedHTML);

  };
  return middleware;
};








module.exports = middlewareWrapper;