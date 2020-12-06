const express = require('express');
const router = express.Router();
const talController =   require('../controllers/controller');
router.get('/Occupation',
talController.getOccupations
);
router.get('/Rating', talController.getRating);
module.exports=router;