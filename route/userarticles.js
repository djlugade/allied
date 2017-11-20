const express = require("express");
const router = express.Router();

//live connect
const mongojs = require('mongojs');
const db = mongojs('mongodb://poonam:poonam30@ds033113.mlab.com:33113/allied', ['articles']);