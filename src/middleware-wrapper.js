const path = require('path');

const middlewareWrapper = config => {
  const middleware = (req, res, next) => {
    // TODO: Fill this in if we want to use app.use 
    // to collect data
  };

  middleware.pageRoute = (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  };
  return middleware;
};



module.exports = middlewareWrapper;