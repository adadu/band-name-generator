"use strict"

/* There are two steps to this assignment.  If you need help, look at the slides
and/or ask for help on Slack.



First, make sure you have a working app from what we did in class. Here"s what
you should have from class:

A server that serves up an index.html file at the root url (/). That html file
references two js files: jQuery, and your script.js file (or whatever it"s
named). A button that, when clicked, sends a get request to a json endpoint.
That endpoint returns a random adjective, which is then parsed and displayed in
the browser.


Once you have that working, do the following::

Add two more objects in the server file: one for verbs, one for nouns. Follow
the format we used for adjectives. Create get routes for these objects. Add two
more Ajax get requests to your script.js file to retrieve the verbs and nouns.


Write a couple sentences letting us know where you are with this. No need to
turn in code for now. I advise getting this done on time, since this will (along
with some other work) be a part of your final assignment. */

// whatever express exports in json file we require and
//assign to express var
var express = require("express");
//express function now is assigned to app
var bodyparser = require("body-parser");
//access .body or .auth to treat it like js from http-code
var Adjective = require("./lib/adjective.js");
var Noun = require("./lib/noun.js");
var Verb = require("./lib/verb.js");
// we have moved adjective to .lib folder
var getRandomWord = require("./lib/getRandomWord.js");
var postRandomWord = require("./lib/postRandomWord.js");
var app = express();
//express module is framework that gives fetures for
//web and mobile apps
var port = process.env.PORT || 3000;
//could make environment variable, if i don"t see that then go through port 3K

app.use(bodyparser.json());
//middlware between what one thing is doing and what your code is doing
app.use(bodyparser.urlencoded({extended: true}));
//makes it look pretty,

app.use(express.static(__dirname + "/app/"));
// this is middleware, now server knows to make server there

var adjective = new Adjective();
var noun = new Noun();
var verb = new Verb();
// instantiate

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

app.post("/adjective", function(req, res) {
  var word = postRandomWord(req.body.word, adjective);
  res.json(word);
});
//this root name is different than get root name
app.post("/verb", function(req, res) {
  var word = postRandomWord(req.body.word, verb);
  res.json(word);
});

app.post("/noun", function(req, res) {
  var word = postRandomWord(req.body.word, noun);
  res.json(word);
});

app.listen(port, function() {
  console.log("server available at localhost: " + port);
});

// copy paste
