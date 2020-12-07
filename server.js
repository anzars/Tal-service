const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Pass to next layer of middleware
    next();
});

app.get('/', (req, res) => {
    res.json({'Title' :'Welcome to the TAL service',
               'Link1' : 'http://localhost:5000/api/v1/ratings/Occupation',
               'Link2' : 'http://localhost:5000/api/v1/ratings/rating?occupation=doctor'
              } );
  });
// define a root route
const Routes = require('./routes/routes')
// using as middleware
app.use('/api/v1/ratings', Routes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});