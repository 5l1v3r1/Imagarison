<<<<<<< HEAD
var fs = require('fs');
var resemble = require('node-resemble');

var request = require('request')
 
//var img1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAJlQTFRFJiYmJiYmJSUlJiYmKysrJiYmJSUlJiYmJSUlJCQkJiYmJycnJiYmJiYmJSUlJiYmJSUlJiYmJSUlJCQkJycnJCQkJycnJiYmJSUlJiYmJiYmJycnJiYmJiYmJSUlJycnJycnJCQkJSUlJiYmJiYmJycnJiYmJycnJiYmJSUlJiYmJiYmJycnJiYmEhISISEhJycnAAAAJiYmQmWwmAAAADJ0Uk5T9JNotgyiTK2KR0P7Zij+PYni/StBMdmBpKnq5tbw1VXsKu9RUM3O7cl8V5ql3w42+gB0ejcrAAAApElEQVQY012PRRIEMQwDs8zMOAzhyP9/3CYDl9XJ7irZEoOXldo5LW2YGWAUlVwIXpIyAZi6ytAor2rjgao2pgXjpFJglvLLdrbez4eT1TIny2QJS50WKCXTHLceDMA1cwLXHsQQjrkIhx4wRC5YRj2og0UW2Ll2P05RSP82g72/iJ6PMzL/FipOgIJIA6cQzEdPBT7eAZE20UO5b7jy7sr91f8BZR4qkBlEJUYAAAAASUVORK5CYII=';

url = 
 
var img1 = fs.readFileSync('./a.png');

var img2 = fs.readFileSync('./b.png');
  
=======

var fs = require('fs');

var resemble = require('node-resemble');

var img1 = fs.readFileSync('./a.png');

var img2 = fs.readFileSync('./b.png');

>>>>>>> 9edac84b77295cffba31cc74f1bf5b01de1a5cf5
resemble(img1).compareTo(img2).onComplete(function(data){
    console.log(data.misMatchPercentage);
});
