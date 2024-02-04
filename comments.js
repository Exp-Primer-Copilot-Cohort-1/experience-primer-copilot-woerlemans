// create web server
// run this file by typing "node comments.js" in terminal
// then go to "http://localhost:3000/" in the browser

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var comments = [
  { "author": "Pete Hunt", "text": "This is one comment" },
  { "author": "Jordan Walke", "text": "This is *another* comment" }
];

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/comments', function(req, res) {
  res.send(comments);
});

app.post('/comments', function(req, res) {
  comments.push(req.body);
  res.send(comments);
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});