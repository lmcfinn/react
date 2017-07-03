var express = require("express");
var bodyParser = require("body-parser");
// var logger = require("morgan");
var mongoose = require("mongoose");

var History = require("./models/History");

var app = express();

var PORT = process.env.PORT || 3000;