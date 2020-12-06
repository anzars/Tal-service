const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send("Hello World");
  });
// define a root route
const Routes = require('./routes/routes')
// using as middleware
app.use('/api/v1/ratings', Routes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});