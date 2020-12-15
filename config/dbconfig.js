'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'sql12.freesqldatabase.com',
  user     : 'sql12382106',
  password : '4DFYfHNLx5',
  database : 'sql12382106'
});
dbConn.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log("Database Connected!");
});
module.exports = dbConn;