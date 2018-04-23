let dbDebug = require('debug')('hackathon:database');

let mongoose = require('mongoose');
let db = require(__dirname + '/db/init/index')(mongoose);
let schema = require(__dirname + '/db/schema')(mongoose.Schema, dbDebug);

let Users = db.model('User', schema.Users);
let Files = db.model('Files', schema.Files);
