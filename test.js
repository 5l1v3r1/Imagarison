var fs = require('fs');
var resemble = require('node-resemble');

global.check='';

var request = require('request');
 
var img1 = fs.readFileSync(process.argv[2]);

var img2 = fs.readFileSync(process.argv[3]);
  
var test = resemble(img1).compareTo(img2).onComplete(function(data,callback){
    //console.log(data.misMatchPercentage);
    global.check=data.misMatchPercentage;// Inna ninte global variable melal global enn paranj vanekkal blody rascal
});


console.log(global.check);
