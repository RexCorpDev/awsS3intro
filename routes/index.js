'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');

var multer = require('multer');
var upload = multer({storage : multer.memoryStorage()});
var upload = multer({destination : './uploads'});

router.post('/', upload.single('uploadForm'), (req, res) => {
  console.log('req.file: ', req.file);
  Image.upload(req.file, (err, image) => {

  })
  res.redirect('/');
})

router.get('/', (req, res, next) => {
  var indexPath = path.join(__dirname, '../views/index.html');
  res.sendFile(indexPath);
});

module.exports = router;
