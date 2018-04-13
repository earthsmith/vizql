const path = require('path');
const fs = require('fs');

const middlewareWrapper = config => {
  const middleware = (req, res, next) => {
    // TODO: Fill this in if we want to use app.use 
    // to collect data
  };


  middleware.pageRoute = (req, res) => {
    let data =
      ['id', 'First name', 'Last name', 'Email', 'Address']

    const renderedHTML =
      fs.readFileSync(path.join(__dirname, '/public/index.html'))
        .toString()
        .replace(/{{ data }}/g, JSON.stringify(data))
        .replace(/{{ style }}/g, fs.readFileSync(path.join(__dirname, '/public/stylesheets/style.css')))
    res.send(renderedHTML);

  };
  return middleware;
};





module.exports = middlewareWrapper;