
var express = require('express');
var path=require("path");
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');
var bp=require('body-parser');
var passport = require('passport');
var session = require('express-session');
var app = express();
app.use(bp.urlencoded({ extended:true}));

//app.use(express.static(path.join(__dirname, 'public')));
app.get('/',function(req,resp){
    var x=req.headers['x-forwarded-for'];
    var z=req.headers['accept-language'];
    var y=req.headers['user-agent'];
    var match1=/^(.*);/.exec(z);
    var match=/.*?(\(.*?\)).*/.exec(y);//return the array with first element as matched string and other the captured object(note:? for non-greedy matching)
    var obj={
        ipaddress:x,
        language:match1[0],
        operatingsystem:match[1]
    };
    resp.send(JSON.stringify(obj,null,40));

});
var port =8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});