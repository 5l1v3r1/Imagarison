global.check='';//for download
var fs = require('fs');
var http =require('http');
var express = require('express');
var request = require('sync-request');
var router = express.Router();
var app = express();
var resemble = require('node-resemble');


var url=[];
var filenames=[];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('process', { title: 'Express' });
});



router.post('/', function(req, res, next)
 {

	res.render('process', { title: 'Imagarison', 
		des:'POST Request'	
	});
  
	var link1 = req.body.link1;
	var link2 = req.body.link2;

	/*
	var request1 = request.get('GET',link1);
	var request2 = request.get('GET',link2);

	var file1 = fs.createWriteStream("public/images/file1"+link1.slice(-4));
	var file2 = fs.createWriteStream("public/images/file2"+link1.slice(-4));*/

	url=[link1,link2];

	console.log("Downloading the url's");


	for(i=0;i<2;i++)
	{
	
		console.log("Downloading " + url[i]);
		var k = request('GET',url[i]);
		var good = fs.createWriteStream("public/images/file"+String.fromCharCode(97+i)+url[i].slice(-4));
		good.write(k.getBody());
		//download(url[i],'/home/opensec/Desktop/Imagarison/'+String.fromCharCode(97+i)+url[i].slice(-4));//Change Path to Ur Windows/Linux Full Path
		filenames.push('/images/file'+String.fromCharCode(97+i)+url[i].slice(-4));
	}

	console.log("Download Completed");
	
/*
	file1.write(request1.getBody());
	file2.write(request2.getBody());*/

	

//	download(link1,'assets/file1.jpg');
//	download(link2,'assets/file2.jpg');
	

});



router.get('/result', function(req, res, next) {


var img1 = fs.readFileSync("public/images/file"+String.fromCharCode(97)+url[0].slice(-4));
var img2 = fs.readFileSync("public/images/file"+String.fromCharCode(98)+url[0].slice(-4));



var diff = resemble(img1).compareTo(img2).onComplete(function(data){	

console.log(data);
var alldata=JSON.stringify(data);
var issamedim=data.isSameDimensions;
var mispers=data.misMatchPercentage;
var temp = (100-mispers);
var mispers1=temp.toFixed(2);
var dimdiffwidth=data.dimensionDifference.width;
var dimdiffheight=data.dimensionDifference.height;
var analysis=data.analysisTime;
var test1=filenames[0];
var test2=filenames[1];
filenames=[];

res.render('result', { title: 'Imagarison', 
		ejsalldata:alldata,
		ejsissamedim:issamedim,
		ejsmispers:mispers1,
		ejsdimdiffwidth:dimdiffwidth,
		ejsdimdiffheight:dimdiffheight,
		ejsanalysis:analysis,
		ejslink1:test1,
		ejslink2:test2
		
	});

});



});




module.exports = router;
