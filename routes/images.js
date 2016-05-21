'use strict';

let express = require('express');
let router = express.Router();
let path = require('path');


let ddg = require('ddg');
let multer = require('multer');
let upload = multer({storage : multer.memoryStorage()});
// let upload = multer({destination : './upload'});

router.post('/upload', upload.single('uploadForm'), (req, res) => {
  console.log('req.file: ', req.file);
  // Image.upload(req.file, (err, image) => {
  //
  // })
  // console.log('res.file', res.file);
  res.redirect('/');
})


// DUCK DUCK GO
// let ddgOptions = {
//   "useragent"       :   "chHack app",
//   "format"          :   "json",
//   "no_redicrects"   :   "1",
//   "no_html"         :   "0"
// };
// ddg.query('javascript', ddgOptions, (err, data) => {
//   console.log('DDG data', data);
//
// });



module.exports = router;
