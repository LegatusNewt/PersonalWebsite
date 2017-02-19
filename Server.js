/*jslint node: true */
"use strict";

var express = require("express");
var ejs = require("ejs");
var serveStatic = require("serve-static");
var app = express();
var router = express.Router();
var temp =  __dirname + '/pages/';
var path = require("path");

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/",function(req,res){
    res.render('mainpage.ejs');
});

router.get("/Home",function(req,res){
    res.render('mainpage.ejs');
});

router.get("/contact",function(req,res){
    res.render('contactMe.ejs');
});

app.use("/",router);

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.listen(3000,function(){
  console.log("Live at Port 3000");
});

