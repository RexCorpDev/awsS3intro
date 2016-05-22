'use strict';
require('dotenv').load();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGODB_URI || "mongodb://localhost/photo-album";

// SERVER
var express = require('express');
var router = express.Router();
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// MIDDLE WARE
var socket1 = require('./socket_template');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var uuid = require('uuid');

// DB
let mongoose = require('mongoose');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));


// SOCKET io
io.on('connection', (socket) => {
  console.log('Client connected');
  socket1.init(io, socket);
});


server.listen(PORT, err => {
  console.log(err || `Server listening on PORT ${PORT}`);
});

mongoose.connect(MONGO_URL, err => {
  console.log(err || `MONGOdb @ ${MONGOURL}`)
})

module.exports = router;
