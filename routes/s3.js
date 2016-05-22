"use strict";

var express = require("express");
var router = express.Router();
var multer = require("multer");
var upload = multer({ storage: multer.memoryStorage()});
var S3 = require("../models/S3");

router.get('/', (req, res) => {
  res.send('hello?')
})

router.post("/addToBucket", upload.single("newFile"), function (req, res) {
  console.log("reqfile: ", req.file)
  S3.storeOn(req.file, (err) => {
    if(err) res.status(400).send(err);
    res.redirect("/")
  });
});

router.route('/getFromBucket')
.put((req, res) => {
  if(req.query.file){
    console.log('KEY: ', req.body);
    S3.getFile(req.body, function (err, data) {
      if (err) res.status(400).send(err);
      res.send(data);
    });
  } else if(req.query.image) {
    S3.getImg(req.body, (err, data) => {
      res.status(err ? 400:200).send(err || data);
    });
  } else {
    res.status(400).send({ERROR : "Choose file type you wish to download"});
  };
});


router.post("/addMulti", upload.array("newFiles"), function (request, response) {
  console.log("Here");
  console.log("files: ", request.files); // gtg

  S3.uploadMultiple(request.files, function (error, list) {
    if (error) response.status(400).send(error);
    console.log("results: ", list);
    response.send(list)
  });
});

router.post('/getBucketList', (req, res) => {
  S3.getBucketList(req.body.que, (err, list) => {
    res.status(err ? 400 : 200).send({FILES: list});
  });
});


module.exports = router;
