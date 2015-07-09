

var fs = require('fs');
var http = require('http');
var resemble = require('node-resemble');

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

url=['http://reviewmything.com/wp-content/uploads/Never-Regret-Something-Facebook-Cover.png','http://drop.ndtv.com/albums/BUSINESS/lamborghini/1.jpg']

console.log("Downloading the url's");

var filenames = []

for(i=0;i<2;i++)
{
	
	console.log("Downloading " + url[0]);
	download(url[i],'/home/opensec/Desktop/Imagarison/'+i+url[i].slice(-4));//Change Path to Ur Windows/Linux Full Path
	filenames.push('/home/opensec/Desktop/Imagarison/'+i+url[i].slice(-4));
}

console.log("Download Completed");

var img1 = fs.readFileSync('./0.png');
var img2 = fs.readFileSync('./1.png');


// Not executing the resemble (check)

var diff = resemble(img1).compareTo(img2).ignoreColors().onComplete(function(data)
{
    //console.log("h");
    console.log(data);
});
console.log(diff);
