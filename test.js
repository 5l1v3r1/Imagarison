
var fs = require('fs');

var resemble = require('node-resemble');

var img1 = fs.readFileSync('./a.png');

var img2 = fs.readFileSync('./b.png');

resemble(img1).compareTo(img2).onComplete(function(data){
    console.log(data.misMatchPercentage);
});
