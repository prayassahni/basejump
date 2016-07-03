
var express = require('express');
var path=require("path");
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');
var bp=require('body-parser');
var passport = require('passport');
var session = require('express-session');
var app = express();
app.use(bp.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.get(/^\/(.+)/,function(req,resp){
    //console.log(req.body);
	//console.log('hii');
	//console.log(req.params[0]);
	var obj={};
	var temp=req.params[0];
	if(/^[0-9]{1,}/.test(temp)){
	
		var y=new Date(req.params[0]/1000).toString();
		if(y==='Invalid Date')
        {obj.natural=null;
        obj.unix=null;}
        else{
		obj.unix=req.params[0]
		obj.natural=y.substr(4,11);
        }
	}
	else{
		obj.unix=Date.parse(req.params[0]);
		if(isNaN(obj.unix)==false)
		{obj.natural=req.params[0];}
		else{obj.natural=null;}
		console.log(obj);
	}
		
resp.send(obj);
  });
var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});