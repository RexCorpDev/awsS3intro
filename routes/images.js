'use strict';

let express = require('express');
let router = express.Router();
let path = require('path');
let multer = require('multer');
// let upload = multer({destination : './upload'});
let upload = multer({storage : multer.memoryStorage()});

router.post('/upload', upload.single('uploadImage'), (req, res) => {
  console.log('req.file: ', req.file);
  // Image.upload(req.file, (err, image) => {
  //
  // })
  // console.log('res.file', res.file);
  res.redirect('/');
})





module.exports = router;
