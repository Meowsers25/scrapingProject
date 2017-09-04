var express = require('express');
var path = require ('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = process.env.PORT

// var url = "http://google.com";
// request(url, function(err, res, body){
//   if(err){
//       console.log(err);
//   } else{
//     console.log(body);
//     }
// });

var destination = fs.createWriteStream('./downloads/google2.html');
var url = "http://google.com";
request(url)
.pipe(destination)
.on('finish', function(){
    console.log('done');
})
.on('error', function(err){
   console.log(err); 
});

app.listen(port);
console.log('Server listening on ' + port);