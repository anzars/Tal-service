'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'sql2.freesqldatabase.com',
  user     : 'sql2380170',
  password : 'kN9%wU8*',
  database : 'sql2380170'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;