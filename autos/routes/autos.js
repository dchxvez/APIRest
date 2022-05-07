var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Autos =requiere('../modelos/autos');

/* end point get all autos */
router.get('/', function(req, res, next) {
  Autos.find({},(err,data)=>{
    res.status(200).json(data);
  });
});

module.exports = router;
