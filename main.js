var fs = require('fs');
var request = require('request');
var resemble = require('node-resemble');


url=['http://img11.deviantart.net/b9e4/i/2012/334/2/8/tree_png_by_camelfobia-d5mlo5u.png','http://img08.deviantart.net/74e1/i/2012/280/f/9/mirror_png_by_doloresdevelde-d5h40i2.png']

console.log("Downloading the url's");

var filenames = []

for(i=0;i<2;i++)
{
	
	console.log("Downloading " + url[0]);
	request(url[i]).pipe(fs.createWriteStream(String.fromCharCode(97+i)+url[i].slice(-4)))
	//download(url[i],'/home/opensec/Desktop/Imagarison/'+String.fromCharCode(97+i)+url[i].slice(-4));//Change Path to Ur Windows/Linux Full Path
	filenames.push('/home/opensec/Desktop/Imagarison/'+String.fromCharCode(97+i)+url[i].slice(-4));
}

console.log("Download Completed");

console.log(filenames[0]);
console.log(filenames[1]);

var img1 = fs.readFileSync(filenames[0]);

var img2 = fs.readFileSync(filenames[1]);

//console.log( 'a'.charCodeAt​(0))​;

resemble(img1).compareTo(img2).onComplete(function(data){
    console.log(data.misMatchPercentage);
});

