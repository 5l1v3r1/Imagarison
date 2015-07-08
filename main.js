var fs=require('fs');
var http = require('http');

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

for(i=0;i<2;i++)
{
	
	console.log("Downloading " + url[0]);
	download(url[i],'/home/opensec/Desktop/Imagarison/'+i+url[i].slice(-4));//Change Path to Ur Windows/Linux Full Path
}

console.log("Download Completed");

