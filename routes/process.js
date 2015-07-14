global.check='';
var fs = require('fs');
var http =require('http');
var express = require('express');
var router = express.Router();
var app = express();
var resemble = require('node-resemble-js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('process', { title: 'Express' });
});



router.post('/', function(req, res, next) {
  res.render('process', { title: 'Imagarison', 
		des:'POST Request'	
	});
	var link1 = req.body.link1;
	var link2 = req.body.link2;

	
	var file1 = fs.createWriteStream("public/images/file1"+link1.slice(-4));
	var file2 = fs.createWriteStream("public/images/file2"+link1.slice(-4));
	var request1 = http.get(link1, function(response) {
  	response.pipe(file1);
	});
	var request2 = http.get(link2, function(response) {
  	response.pipe(file2);
	});




//	download(link1,'assets/file1.jpg');
//	download(link2,'assets/file2.jpg');
	

});



router.get('/result', function(req, res, next) {


var img1 = fs.readFileSync("public/images/file1.png");
var img2 = fs.readFileSync("public/images/file2.png");



var diff = resemble(img1).compareTo(img2).onComplete(function(data){	

var alldata=JSON.stringify(data);
var issamedim=data.isSameDimensions;
var mispers=data.misMatchPercentage;
var dimdiffwidth=data.dimensionDifference.width;
var dimdiffheight=data.dimensionDifference.height;
var analysis=data.analysisTime;

res.render('result', { title: 'Imagarison', 
		ejsalldata:alldata,
		ejsissamedim:issamedim,
		ejsmispers:mispers,
		ejsdimdiffwidth:dimdiffwidth,
		ejsdimdiffheight:dimdiffheight,
		ejsanalysis:analysis
		
	});

});



});




module.exports = router;
