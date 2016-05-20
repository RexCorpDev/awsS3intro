'use strict';

const PORT = process.env.PORT || 3000;

var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var fs = require('fs');


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
app.get('/', require('./routes/index'));

var bucketName = 'toby-s3-test';
var fileName = 'zoolander.jpg';
var urlBase = 'https://s3.amazonaws.com/'

fs.readFile(path.join(__dirname, './zoolander.jpg'), (err, data) => {
  console.log('err: ', err);
  console.log('data: ', data);

  var ext = fileName.split('.').pop();
  var key = uuid() + `.${ext}`;


  let params = {
    Bucket: bucketName,
    Key: key,
    ACL: 'public-read',
    Body: data
  };

  s3.putObject(params, (err, result) => {

    var imgUrl = `${urlBase}${bucketName}/${key}`
    console.log('imgUrl: ', imgUrl);
    console.log('err: ', err);
    console.log('result: ', result);
  });
});


io.on('connection', (socket) => {
  console.log('Client connected');
  socket1.init(io, socket);
});

server.listen(PORT, err => {
  console.log(err || `Server listening on PORT ${PORT}`);
});

module.exports = app;
