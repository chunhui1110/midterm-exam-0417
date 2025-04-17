var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.send("B11007021 李純慧!");
});

var server = app.listen(3000, function(){
    var host = server.address().address;
    var post = server.address().post;
    console.log("Example app listening at 'http://%s:%s", host, port);
});