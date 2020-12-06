'use strict';
var dbConn = require('./../config/dbconfig');


 exports.occupations = async function (result) {
dbConn.query("SELECT * FROM `Occupation", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('rating : ', res);
  result(null, res);
}
});
};

exports.ratings = function (occupation, result) {
  dbConn.query("SELECT Factor FROM `Tbl_Rating` WHERE ID=(Select RatingID from Occupation where Occupation = ? ) ", occupation, function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(err, null);
  }
  else{
    result(null, res);
  }
  });
  };