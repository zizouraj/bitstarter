var express = require('express');
var fs = require('fs');

var mssg = function(){
    var temp = fs.readFileSync('index.html');
    return temp.toString("utf-8");
}

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(mssg());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
