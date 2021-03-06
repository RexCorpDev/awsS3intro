'use strict';

const PORT = process.env.PORT || 3000;

var express = require('express');
var router = express.Router();
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var socket1 = require('./socket_template');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var uuid = require('uuid');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));

io.on('connection', (socket) => {
  console.log('Client connected');
  socket1.init(io, socket);
});

server.listen(PORT, err => {
  console.log(err || `Server listening on PORT ${PORT}`);
});

module.exports = router;
