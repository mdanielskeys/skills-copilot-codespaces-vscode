// Create web server

// Load modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/comments');

// Create web server
var app = express();
app.use(bodyParser.json());

// Create schema for comments
var Comment = mongoose.model('Comment', {
  text: String,
  date: Date
});