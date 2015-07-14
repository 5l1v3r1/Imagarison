var fs = require('fs');
var express = require('express');
var router = express.Router();
var resemble = require('node-resemble-js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('result', { title: 'Imagarison | Image Comparison' });
});

	
var img1 = fs.readFileSync("file1.png");
var img2 = fs.readFileSync("file2.png");


var diff = resemble(img1).compareTo(img2).onComplete(function(data){
    console.log(data.misMatchPercentage);
});

module.exports = router;
