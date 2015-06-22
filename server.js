"use strict"

var express = require("express");
var bodyparser = require("body-parser");
var Adjective = require("./lib/adjective.js");
var Noun = require("./lib/noun.js");
var Verb = require("./lib/verb.js");
// added favorite object with properties to be assigned
var Favorite = require("./lib/favorite.js");
// added post favorite method to save favorites
var postFavorite = require("./lib/postFavorite.js");
var getRandomWord = require("./lib/getRandomWord.js");
var postRandomWord = require("./lib/postRandomWord.js");

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/app/"));

// instantiate
var adjective = new Adjective();
var noun = new Noun();
var verb = new Verb();
// create new Favorite object called favorite
var favorite = new Favorite();
// gets
app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.get("/adjective", function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get("/verb", function(req, res) {
  res.json(getRandomWord(verb));
});

app.get("/noun", function(req, res) {
  res.json(getRandomWord(noun));
});
//posts
app.post("/adjective", function(req, res) {
  var word = postRandomWord(req.body.word, adjective);
  res.send(word);
});

app.post("/verb", function(req, res) {
  var word = postRandomWord(req.body.word, verb);
  res.json(word);
});

app.post("/noun", function(req, res) {
  var word = postRandomWord(req.body.word, noun);
  res.json(word);
});
// adding in post favorite method to check input/give user feedback and post
// a favorite
app.post("/fave", function(req, res) {
  var word = postFavorite(req.body.word, favorite);
  res.json(word);
});

app.listen(port, function() {
  console.log("server available at localhost: " + port);
});
