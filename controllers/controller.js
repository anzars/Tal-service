'use strict';
const talmodel = require('../models/model');
 exports.getOccupations =function(req, res) {
    talmodel.occupations(function(err, result) {
      console.log('controller')
      if (err)
      res.send(err);
      console.log('res', result);
      res.send(result);
    });
    };
    exports.getRating = function(req, res) {
      talmodel.ratings(req.query.occupation, function(err, result) {
        if (err)
        res.send(err);
        res.json(result);
      });
      };