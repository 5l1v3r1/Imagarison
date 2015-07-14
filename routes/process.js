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




resemble(img1).onComplete(function(data){
    	//console.log(data);
	global.check=data;
	//console.log(global.check);
	//global.jpost = JSON.stringify(data);
	
   
	
});



console.log(global.check);

var jpost='';
  res.render('result', { title: 'Imagarison', 
		des:jpost
		
	});

	

 



console.log("========");
var diff = resemble(img1).compareTo(img2).onComplete(function(data){
    console.log(data);
});



});




module.exports = router;
