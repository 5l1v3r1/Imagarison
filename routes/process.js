var fs = require('fs');
var http =require('http');
var express = require('express');
var router = express.Router();

var resemble = require('node-resemble-js');
/*
function download(url, dest, callback) {
    var file = fs.createWriteStream(dest);
    var request = http.get(url, function (response) {
        response.pipe(file);
        file.on('finish', function () {
            file.close(callback); // close() is async, call callback after close completes.
        });
        file.on('error', function (err) {
            fs.unlink(dest); // Delete the file async.
            if (callback)
                callback(err.message);
        });
    });
}
*/

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

	
	var file1 = fs.createWriteStream("assets/file1"+link1.slice(-4));
	var file2 = fs.createWriteStream("assets/file2"+link1.slice(-4));
	var request1 = http.get(link1, function(response) {
  	response.pipe(file1);
	});
	var request2 = http.get(link2, function(response) {
  	response.pipe(file2);
	});



var img1 = fs.readFileSync("assets/file1"+link1.slice(-4));
var img2 = fs.readFileSync("assets/file2"+link1.slice(-4));


// Not executing the resemble (check)

var diff = resemble(img1).compareTo(img2).ignoreColors().onComplete(function(data)
{
    //console.log("h");
    console.log(data);
});

console.log(diff);



//	download(link1,'assets/file1.jpg');
//	download(link2,'assets/file2.jpg');
	

	
	


});


module.exports = router;
